const containerModel = document.querySelector('[data-model]');
const btnModal = document.querySelectorAll('.swipper .slides .slide span');
const modals = document.querySelectorAll('[data-modal]');

const barraDeProgresso = document.querySelectorAll('[data-progressBar]');

const btnsExit = document.querySelectorAll('[data-fechaModal]');

function ativarModal(dataBtn, listaModal) {
    
    listaModal.forEach(el => {
        el.classList.remove('active')

        if(dataBtn !== el.dataset.btn) return;
        el.classList.add('active');

        barraDeProgresso.forEach(barra =>{
            barra.classList.remove('active')
            barra.querySelector('div').classList.remove('brilho')
        })
    })
    containerModel.classList.add('active');
}


function ativarBrilho(elemetoPai) {
    elemetoPai.addEventListener('animationend', () => {
        elemetoPai.querySelector('div').classList.add('brilho')
    })
}

function ativarBarraProgesso() {
    barraDeProgresso.forEach(barra => {
        barra.classList.add('active')
        ativarBrilho(barra)
    })
}

function fecharModal() {
    if(!this.dataset.hasOwnProperty('fechamodal')) return;
    containerModel.classList.remove('active')
}

btnModal.forEach(btn => btn.addEventListener('click', (e) => ativarModal(e.target.dataset.btn, modals)))
modals.forEach(modal => modal.addEventListener('animationend', ativarBarraProgesso))
btnsExit.forEach(btnExit => btnExit.addEventListener('click', fecharModal))
