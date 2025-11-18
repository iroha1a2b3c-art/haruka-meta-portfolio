document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 実際の送信を停止
    window.location.href = "contact-thanks.html"; // CONTACT-THANKSへ遷移
  });
});
