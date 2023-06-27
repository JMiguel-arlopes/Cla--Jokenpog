const animes = document.querySelectorAll('[data-anime]');

function animation() {
    const distanciaTopo = window.scrollY + (window.innerHeight * 3) / 4;

    animes.forEach(el => {
        distanciaTopo > el.offsetTop ? el.classList.add('animate') : el.classList.remove('animate')
           
    })
}


window.addEventListener('scroll', animation)
