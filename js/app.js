const btnMenu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

btnMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
})


window.addEventListener("scroll", () => {
    navbar.classList.remove('active');
})

