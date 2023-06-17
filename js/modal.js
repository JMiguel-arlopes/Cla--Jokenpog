const containerModel = document.querySelector('[data-model]');
const btnModel = document.querySelectorAll('.swipper .slides .slide span');
const models = document.querySelectorAll('[data-modelSlide]');




btnModel.forEach(btn => {
    btn.addEventListener('click', (el) => {
        
        models.forEach(model => {
            if(model.dataset.modelslide == el.target.dataset.btn) {
                

                const bannerPrincipal = model.querySelector('.modal-perfil');
                const bannerGrafico = model.querySelector('.modal-grafico');
                const btnGraficos = model.querySelector('[data-btnGraficos]');


                model.classList.add('active');
                models.forEach(i => {
                    if(i != model) {
                        i.classList.remove('active');
                    }
                })

                // ao clique o botão, some layout 1 e entra os graficos.
                
                

                btnGraficos.addEventListener('click', () => {

                    if(bannerPrincipal.classList.contains('active')) {
                        
                        bannerPrincipal.classList.replace('active', 'disabled');
                        bannerGrafico.classList.replace('disabled', 'active');
                    } else {
                        bannerPrincipal.classList.replace('disabled', 'active');
                        bannerGrafico.classList.replace('active', 'disabled');
                    }
                        

                })
            }            
        })
    
        containerModel.classList.add('active');
    })
})

containerModel.addEventListener('click', el => {
    
    if(el.target.id == 'modalID' || el.target.className == 'fa-solid fa-x') {
        containerModel.classList.remove('active');
        
    }

})

const barraDeProgresso = document.querySelectorAll('.progress-bar');


barraDeProgresso.forEach(el => {
    el.addEventListener('animationend', () => {
        el.querySelector('div').classList.add('brilho')
    })
})