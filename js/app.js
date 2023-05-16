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
    
    const nnsei = caixa.dataset.caixa;
    // console.log(nnsei)


    caixa.addEventListener('click', (evento) => {
        const dataGame = evento.target.dataset.caixa;
        const game = evento.target;
        // console.log(nnsei)
        

        if (dataGame === nnsei) {
            game.classList.replace('disabled', 'active');
                
        } else {
            painelInvestimentos.classList.add('disabled');
            painelCOD.classList.add('disabled');
            // painelInvestimentos.classList.replace('active', 'disabled');
            // painelCOD.classList.replace('active', 'disabled');
        } 

        // if (dataGame === "eco") {
        //     painelInvestimentos.classList.remove('disabled');
        //     painelInvestimentos.classList.add('active');

        //     painelCOD.classList.remove('active');
        //     painelMLBB.classList.remove('active');

        //     painelCOD.classList.add('disabled');
        //     painelMLBB.classList.add('disabled');
        // }

        // if (dataGame === "cod") {
        //     painelCOD.classList.remove('disabled');
        //     painelCOD.classList.add('active');

        //     painelInvestimentos.classList.remove('active');
        //     painelMLBB.classList.remove('active');

        //     painelInvestimentos.classList.add('disabled');
        //     painelMLBB.classList.add('disabled')
        
        // }

        link.forEach((linka) => {
            const l = linka.dataset.link;

            if(l == dataGame) {
                linka.classList.remove('hide');
                evento.target.querySelector('[data-titulo]').classList.add('hide');
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
