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

const titulo = document.querySelectorAll('.titulo-plataforma');
const link = document.querySelectorAll('.link-plataforma');



painelInvestimentos.addEventListener('click', () => {
    painelInvestimentos.classList.remove('disabled');
    painelInvestimentos.classList.add('active');

    painelCOD.classList.remove('active');
    painelMLBB.classList.remove('active');

    painelCOD.classList.add('disabled');
    painelMLBB.classList.add('disabled');


    link.forEach((linka, i) => {

        if(i === 0) {
            linka.classList.remove('hide');

            titulo.forEach((title, j) => {
                if(j === i) {
                    title.classList.add('hide');
                }
            }) 
        } else {
            if (!linka.classList.contains('hide'))
                linka.classList.add('hide');

                titulo.forEach((title, j) => {
                    if(j === i) {
                        title.classList.remove('hide');
                    }
                }) 
        }
    })
})


painelCOD.addEventListener('click', () => {
    painelCOD.classList.remove('disabled');
    painelCOD.classList.add('active');

    painelInvestimentos.classList.remove('active');
    painelMLBB.classList.remove('active');

    painelInvestimentos.classList.add('disabled');
    painelMLBB.classList.add('disabled');


    link.forEach((linka, i) => {

        if(i === 1) {
            linka.classList.remove('hide');

            titulo.forEach((title, j) => {
                if(j === i) {
                    title.classList.add('hide');
                }
            })
        } else {
            if (!linka.classList.contains('hide'))
                linka.classList.add('hide');

                titulo.forEach((title, j) => {
                    if(j === i) {
                        title.classList.remove('hide');
                    }
                }) 
        }
    })
})


painelMLBB.addEventListener('click', () => {
    painelMLBB.classList.remove('disabled');
    painelMLBB.classList.add('active');

    painelInvestimentos.classList.remove('active');
    painelCOD.classList.remove('active');

    painelInvestimentos.classList.add('disabled');
    painelCOD.classList.add('disabled');

    link.forEach((linka, i) => {

        if(i === 2) {
            linka.classList.remove('hide');

            titulo.forEach((title, j) => {
                if(j === i) {
                    title.classList.add('hide');
                }
            })
        } else {
            if (!linka.classList.contains('hide'))
                linka.classList.add('hide');

                titulo.forEach((title, j) => {
                    if(j === i) {
                        title.classList.remove('hide');
                    }
                }) 
        }
    })
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


