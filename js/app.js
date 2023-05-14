const btnMenu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

btnMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
})


window.addEventListener("scroll", () => {
    navbar.classList.remove('active');
})

// plataformas:

const painelInvestimentos = document.querySelector('.box');
const painelCOD = document.querySelector('.box-2');
const painelMLBB = document.querySelector('.box-3');


painelInvestimentos.addEventListener('click', () => {
    painelInvestimentos.classList.add('active');
    
    painelCOD.classList.remove('active');
    painelMLBB.classList.remove('active');
})

painelCOD.addEventListener('click', () => {
    painelCOD.classList.add('active');

    painelInvestimentos.classList.remove('active');
    painelMLBB.classList.remove('active');
})

painelMLBB.addEventListener('click', () => {
    painelMLBB.classList.add('active');

    painelInvestimentos.classList.remove('active');
    painelCOD.classList.remove('active');
})












const containerPerfil = document.querySelectorAll('.perfil');
const contentPerfil = document.querySelectorAll('.content-review');
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


