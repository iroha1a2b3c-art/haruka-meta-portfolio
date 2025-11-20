document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return; // 他ページでエラーにならないよう保護

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 本来のフォーム送信を止める

    // 入力値を取得してログ出力（JSでフォーム扱えることのアピール用）
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log("Contact form submitted (dummy):", data);

    // ダミー送信完了としてTHANKSページへ
    window.location.href = "contact-thanks.html";
  });
});

