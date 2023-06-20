const btnMenu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

btnMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
})


window.addEventListener("scroll", () => {
    navbar.classList.remove('active');
})

// plataformas:

const caixas = document.querySelectorAll('[data-caixa]');

function ativarCaixa() {
    const dataBoxHit = this.dataset.caixa;
    caixas.forEach(el => {
        el.classList.contains('active') ? el.classList.replace('active', 'disabled') : el.classList.add('disabled');
        if(dataBoxHit != el.dataset.caixa) return;
        el.classList.contains('disabled') ? el.classList.replace('disabled', 'active') : el.classList.add('active');
    })
}

caixas.forEach(box => box.addEventListener('click', ativarCaixa)) // TROCA POR THIS


const containerPerfil = document.querySelectorAll('.perfil');
const UserPerfil = document.querySelectorAll('.user');

containerPerfil.forEach((perfil, i) => {
    perfil.addEventListener('click', () => {
        UserPerfil.forEach((foto, j) => {
            if(i == j) {
                foto.classList.toggle('active');
            }  
        })
    })
})
