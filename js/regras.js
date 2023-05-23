const btnObjetivos = document.querySelector('.btn-objetivos');
const btnProibicoes = document.querySelector('.btn-proibicoes');
const btnDireitos = document.querySelector('.btn-direitos');
const btnDeveres = document.querySelector('.btn-deveres');

const objetivos = document.querySelector('.lista-objetivos');
const proibicoes = document.querySelector('.lista-proibicoes');
const direitos = document.querySelector('.lista-direitos');
const deveres = document.querySelector('.lista-deveres');

const imgValir = document.querySelector('.valir');
const imgValirCollector = document.querySelector('.valir-collector');
const imgKagura = document.querySelector('.kagura');
const imgWanwan = document.querySelector('.wanwan');


btnObjetivos.addEventListener('click', () => {

    imgValir.classList.add('active');
    imgKagura.classList.remove('active');
    imgValirCollector.classList.remove('active');
    imgWanwan.classList.remove('active');

    btnObjetivos.classList.add('active');
    btnProibicoes.classList.remove('active');
    btnDireitos.classList.remove('active');
    btnDeveres.classList.remove('active');


    objetivos.classList.add('active');
    proibicoes.classList.remove('active');
    direitos.classList.remove('active');
    deveres.classList.remove('active');
})

btnProibicoes.addEventListener('click', () => { 

    imgValir.classList.remove('active');
    imgKagura.classList.add('active');
    imgValirCollector.classList.remove('active');
    imgWanwan.classList.remove('active');

    btnObjetivos.classList.remove('active');
    btnProibicoes.classList.add('active');
    btnDireitos.classList.remove('active');
    btnDeveres.classList.remove('active');

    objetivos.classList.remove('active');
    proibicoes.classList.add('active');
    direitos.classList.remove('active');
    deveres.classList.remove('active');
})


btnDireitos.addEventListener('click', () => {

    imgValir.classList.remove('active');
    imgKagura.classList.remove('active');
    imgValirCollector.classList.add('active');
    imgWanwan.classList.remove('active');

    btnObjetivos.classList.remove('active');
    btnProibicoes.classList.remove('active');
    btnDireitos.classList.add('active');
    btnDeveres.classList.remove('active');

    proibicoes.classList.remove('active');
    objetivos.classList.remove('active');
    direitos.classList.add('active');
    deveres.classList.remove('active');
})


btnDeveres.addEventListener('click', () => {

    imgValir.classList.remove('active');
    imgKagura.classList.remove('active');
    imgValirCollector.classList.remove('active');
    imgWanwan.classList.add('active');


    btnObjetivos.classList.remove('active');
    btnProibicoes.classList.remove('active');
    btnDireitos.classList.remove('active');
    btnDeveres.classList.add('active');

    proibicoes.classList.remove('active');
    objetivos.classList.remove('active');
    direitos.classList.remove('active');
    deveres.classList.add('active');
})
