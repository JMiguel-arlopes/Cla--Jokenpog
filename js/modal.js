const containerModel = document.querySelector('[data-model]');
const btnModel = document.querySelectorAll('.swipper .slides .slide span');
const models = document.querySelectorAll('[data-modelSlide]');

btnModel.forEach(btn => {
    btn.addEventListener('click', (el) => {
        
        models.forEach(model => {
            if(model.dataset.modelslide == el.target.dataset.btn) {
                model.classList.add('active');

                models.forEach(i => {
                    if(i != model) {
                        i.classList.remove('active');
                    }
                })
            }

            // const btnModalEstatisticas = model.querySelector('.name-modal')

            
            
            // btnModalEstatisticas.addEventListener('click', () => {
            //     model
            // })
            
            
        })
    
        containerModel.classList.add('active');
    })
})

containerModel.addEventListener('click', el => {


    if(el.target.id == 'modalID') {
        containerModel.classList.remove('active');
    }

})


