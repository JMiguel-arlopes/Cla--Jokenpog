const containerBoxs = document.querySelector('.box-extensoes');
const caixas = document.querySelectorAll('[data-extensao]');

// function ativarCaixa() {
//     const dataElemento = this.dataset.box;

//     caixas.forEach(i => {
//         i.classList.remove('disabled');

//         if (i == this) return;
//         const noClickBox = i.dataset.box;
//         containerBoxs.classList.remove(`active-box-${noClickBox}`);
//         i.classList.add('disabled');
//     })
//     containerBoxs.classList.add(`active-box-${dataElemento}`);
// }

// caixas.forEach(elemento => elemento.addEventListener('click', ativarCaixa))




function ativarExtensao(alvo, listaArray) {
    const clickData = alvo.dataset.extensao;
    listaArray.forEach(el => {
        if(el.dataset.extensao != clickData) return;
        el.classList.toggle('active')
    })
}

caixas.forEach(box => box.addEventListener('click', (el) => ativarExtensao(el.target, caixas)))