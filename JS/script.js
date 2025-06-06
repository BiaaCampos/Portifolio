
// função  de escrever

function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i)
    })
}


document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector('.desc');
    if (titulo) {
        ativaLetra(titulo);
    }
});

