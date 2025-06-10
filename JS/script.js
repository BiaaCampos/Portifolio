
// função  de escrever

function ativaLetra(elemento) {
    const texto = elemento.textContent;
    elemento.textContent = '';
    [...texto].forEach((letra, i) => {
        setTimeout(() => {
            elemento.textContent += letra;
        }, 75 * i);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector('.desc');
    if (titulo) {
        ativaLetra(titulo);
    }
});

