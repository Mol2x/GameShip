document.addEventListener("DOMContentLoaded", function() {
  // بيانات تجريبية لمحاكاة الطلبات؛ استبدلها بالبيانات الفعلية من قاعدة البيانات
  const orders = [
    { id: 1, name: "عميل 1", game: "فري فاير", amount: "$10", status: "قيد التنفيذ" },
    { id: 2, name: "عميل 2", game: "ببجي", amount: "$15", status: "منجز" }
  ];
  
  const ordersTable = document.getElementById("ordersTable");
  orders.forEach(order => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${order.id}</td>
      <td>${order.name}</td>
      <td>${order.game}</td>
      <td>${order.amount}</td>
      <td>${order.status}</td>
      <td><button onclick="manageOrder(${order.id})">إدارة</button></td>
    `;
    ordersTable.appendChild(row);
  });
});

function manageOrder(id) {
  alert("إدارة الطلب رقم " + id);
}