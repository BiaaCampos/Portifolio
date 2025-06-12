document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('form-contato');
  const modal = document.getElementById('modal-sucesso');
  const modalContent = modal ? modal.querySelector('.modal-content') : null;

  function fecharModalSuave() {
    if (modal && modalContent) {
      modal.classList.add("saindo");
      modalContent.classList.add("saindo");
      setTimeout(() => {
        modal.classList.remove("ativo", "saindo");
        modalContent.classList.remove("saindo");
      }, 500); // tempo igual ao da animação
    }
  }

  if (form && modal) {
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
        modal.classList.add("ativo");
        setTimeout(fecharModalSuave, 3000);
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    });
  }

  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        fecharModalSuave();
      }
    });
  }
});