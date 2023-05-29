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











// interação extensoes:

const containerBoxs = document.querySelector('.box-extensoes');
const caixas = document.querySelectorAll('[data-box]');

// 1º forma:

caixas.forEach(elemento => {
    elemento.addEventListener('click', () => {
        const dataElemento = elemento.dataset.box;

        caixas.forEach( i => {
            i.classList.remove('disabled');

            if (i != elemento) {
                const noClickBox = i.dataset.box;
                containerBoxs.classList.remove(`active-box-${noClickBox}`);
                i.classList.add('disabled');
            }
        })
        containerBoxs.classList.add(`active-box-${dataElemento}`);
    })
})
    

// 2º forma :

// containerBoxs.addEventListener('click', (e) => {
//     const caixa = e.target.parentNode.parentNode;
//     const dataCaixa = caixa.dataset.box;

//     if(caixa.dataset.box) {
//         console.log('kk')
//         caixas.forEach(box => {

//             box.classList.remove('disabled');

//             if(box != caixa) {
//                 const dataBox = box.dataset.box;
//                 containerBoxs.classList.remove(`active-box-${dataBox}`);
//                 box.classList.add('disabled');
//             }
//         })
//         containerBoxs.classList.add(`active-box-${dataCaixa}`)
//     } else {
//         caixas.forEach(box => {
//             box.classList.remove('disabled')
//             containerBoxs.classList.remove(`active-box-${dataCaixa}`)
//         })
//     }
// })


// window.addEventListener('scroll', () => {
//     caixas.forEach(box => {
//         const dataBox = box.dataset.box;
//         containerBoxs.classList.remove(`active-box-${dataBox}`);
//     })
// })




var botoes = queryAll('ss');

botoes.forEach(botao => {

    




})