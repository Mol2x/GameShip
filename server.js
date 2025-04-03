const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 3000;

// إعداد الاتصال بقاعدة بيانات MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "gameship_db"
});

db.connect(err => {
  if (err) {
    console.error("فشل الاتصال بقاعدة البيانات:", err);
    return;
  }
  console.log("تم الاتصال بقاعدة البيانات MySQL بنجاح.");
});

// إعداد الميدل وير
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// نقطة نهاية لاستلام بيانات نموذج الاتصال
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  const query = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error("خطأ أثناء حفظ بيانات الاتصال:", err);
      return res.status(500).send("خطأ في الخادم.");
    }
    res.send("تم إرسال رسالتك بنجاح.");
  });
});

// نقطة نهاية لجلب الطلبات لواجهة الإدارة
app.get("/api/orders", (req, res) => {
  const query = "SELECT * FROM orders";
  db.query(query, (err, results) => {
    if (err) {
      console.error("خطأ أثناء جلب الطلبات:", err);
      return res.status(500).send("خطأ في الخادم.");
    }
    res.json(results);
  });
});

// نقطة نهاية لتحديث حالة الطلب
app.post("/api/orders/update", (req, res) => {
  const { id, status } = req.body;
  const query = "UPDATE orders SET status = ? WHERE id = ?";
  db.query(query, [status, id], (err, result) => {
    if (err) {
      console.error("خطأ أثناء تحديث الطلب:", err);
      return res.status(500).send("خطأ في الخادم.");
    }
    res.send("تم تحديث حالة الطلب.");
  });
});

app.listen(port, () => {
  console.log(`يعمل الخادم على المنفذ ${port}`);
});