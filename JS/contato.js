document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('.contato-form');
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        form.reset();
        alert("Mensagem enviada com sucesso!");
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    });
  }
});