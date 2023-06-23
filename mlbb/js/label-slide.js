const listaLabel = document.querySelectorAll('[data-label]');

function ativarLabel(alvo, listaArray) {
    listaArray.forEach(btn => btn.classList.remove('active')) //this.parentNode.querySelectorAll(var).forEach(...)
    alvo.classList.add('active')
    console.log('kk')
}

listaLabel.forEach(label => label.addEventListener('click', (e) => ativarLabel(e.target, listaLabel)))
