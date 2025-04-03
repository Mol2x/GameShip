// مثال للتعامل مع نموذج الاتصال
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("شكراً لتواصلك معنا، سيتم الرد عليك قريباً.");
});

// مثال للتعامل مع أزرار شحن الألعاب
document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    const game = this.getAttribute("data-game");
    alert("تم اختيار شحن لعبة " + game + ". سيتم توجيهك لإتمام عملية الدفع.");
  });
});

// مثال على إجراءات الدفع
document.getElementById("paypalBtn")?.addEventListener("click", function() {
  alert("سيتم توجيهك إلى بوابة PayPal للدفع.");
});
document.getElementById("creditCardBtn")?.addEventListener("click", function() {
  alert("سيتم معالجة الدفع عبر بطاقة الائتمان.");
});