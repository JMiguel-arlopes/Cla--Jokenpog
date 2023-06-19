const btnsRegra = document.querySelectorAll('.title-regra');
const listaRegras = document.querySelectorAll('.lista-regras'); 
const imgsRegra = document.querySelectorAll('.img-regra'); 

function ativarRegras() {
    const dataBtnRegra = this.dataset.regra;
    
    listaRegras.forEach(regra => {
        const dataRegra = regra.dataset.regra;
        dataBtnRegra == dataRegra ? regra.classList.add('active') : regra.classList.remove('active');
    })

    imgsRegra.forEach(imgRegra => {
        const dataImg = imgRegra.dataset.regra;
        dataBtnRegra == dataImg ? imgRegra.classList.add('active') : imgRegra.classList.remove('active');
    })


    btnsRegra.forEach(btn => btn.classList.remove('active'))
    this.classList.add('active')
}

btnsRegra.forEach(btn => btn.addEventListener('click', ativarRegras))
