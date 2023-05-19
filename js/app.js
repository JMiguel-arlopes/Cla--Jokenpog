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
const caixas = document.querySelectorAll('[data-caixa]');

const titulo = document.querySelectorAll('.titulo-plataforma');
const link = document.querySelectorAll('.link-plataforma');

caixas.forEach(caixa => {
    caixa.addEventListener('click', (evento) => {
        const dataGame = evento.target.dataset.caixa;
        const game = evento.target;
        

        if (dataGame === "mlbb") {
            if(game.classList.contains('disabled')) {

                game.classList.replace('disabled', 'active');
                painelInvestimentos.classList.replace('active', 'disabled');
                painelCOD.classList.replace('active', 'disabled');
            } else {

                game.classList.add('active');
                painelInvestimentos.classList.add('disabled');
                painelCOD.classList.add('disabled');
            }
        }

        if (dataGame === "eco") {
            if(game.classList.contains('disabled')) {

                game.classList.replace('disabled', 'active');
                painelMLBB.classList.replace('active', 'disabled');
                painelCOD.classList.replace('active', 'disabled');
            } else {

                game.classList.add('active');
                painelMLBB.classList.add('disabled');
                painelCOD.classList.add('disabled');
            }
        }

        if (dataGame === "cod") {
            if(game.classList.contains('disabled')) {

                game.classList.replace('disabled', 'active');
                painelInvestimentos.classList.replace('active', 'disabled');
                painelMLBB.classList.replace('active', 'disabled');
            } else {

                game.classList.add('active');
                painelInvestimentos.classList.add('disabled');
                painelMLBB.classList.add('disabled');
            }
        }

        link.forEach((linka) => {
            const l = linka.dataset.link;

            if(l == dataGame) {
                linka.classList.remove('hide');
                game.querySelector('[data-titulo]').classList.add('hide');
            } 

            if(l != dataGame) {
                linka.classList.add('hide');

                titulo.forEach((title) => {
                    const t = title.dataset.titulo;
                    if(t != dataGame) {
                        title.classList.remove('hide')
                    }  
                })
            }

        })
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
