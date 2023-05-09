const btnMenu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

btnMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
})


window.addEventListener("scroll", () => {
    navbar.classList.remove('active');
})

let cod = document.querySelector('.cod');
let mlbb = document.querySelector('.mlbb');
let eco = document.querySelector('.eco');

mlbb.addEventListener('click', () => {
    cod.classList.toggle('activeMlbb');
    mlbb.classList.toggle('activeMlbb');
    eco.classList.toggle('activeMlbb')

    cod.classList.remove('activeCod');
    mlbb.classList.remove('activeCod');
    eco.classList.remove('activeCod');

    cod.classList.remove('activeEco');
    mlbb.classList.remove('activeEco');
    eco.classList.remove('activeEco');
})

cod.addEventListener('click', () => {
    cod.classList.toggle('activeCod');
    mlbb.classList.toggle('activeCod');
    eco.classList.toggle('activeCod')

    cod.classList.remove('activeMlbb');
    mlbb.classList.remove('activeMlbb');
    eco.classList.remove('activeMlbb');

    cod.classList.remove('activeEco');
    mlbb.classList.remove('activeEco');
    eco.classList.remove('activeEco');
})

eco.addEventListener('click', () => {
    cod.classList.toggle('activeEco');
    mlbb.classList.toggle('activeEco');
    eco.classList.toggle('activeEco');

    // if(eco.classList.contains(activeEco)) {
    //     eco.style.color='black';
    // }

    cod.classList.remove('activeMlbb');
    mlbb.classList.remove('activeMlbb');
    eco.classList.remove('activeMlbb');

    cod.classList.remove('activeCod');
    mlbb.classList.remove('activeCod');
    eco.classList.remove('activeCod');
})