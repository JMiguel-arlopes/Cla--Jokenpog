const btnsRegra = document.querySelectorAll('.item-regra');
const listaRegras = document.querySelectorAll('.lista-regras'); 
const imgsRegra = document.querySelectorAll('.img-regra');
const titulosRegra = document.querySelectorAll('.title-regra');

function ativarRegras(alvo, listaArray) {
    const dataBtnRegra = alvo.dataset.regra;
    
    listaArray.forEach(regra => {
        const dataRegra = regra.dataset.regra;
        dataBtnRegra == dataRegra ? regra.classList.add('active') : regra.classList.remove('active');
    })

    btnsRegra.forEach(btn => btn.classList.remove('active'))
    alvo.classList.add('active')
}

btnsRegra.forEach(btn => btn.addEventListener('click', (e) => ativarRegras(e.target, listaRegras)));
btnsRegra.forEach(btn => btn.addEventListener('click', (e) => ativarRegras(e.target, imgsRegra)));
btnsRegra.forEach(btn => btn.addEventListener('click', (e) => ativarRegras(e.target, titulosRegra)));