const inputs = document.querySelectorAll('[data-input]');
const listaLabel = document.querySelectorAll('[data-label]');
const arrowSlide = document.querySelectorAll('.arrow-slide');

let counter = 1;

function atualizaLabel() {
    listaLabel.forEach(el => el.classList.remove('active'));
    document.querySelector(`[data-label="${counter}"]`).classList.add('active');
}

function atualizaSlide() {
    counter > inputs.length ? counter = 1 : false;
    document.getElementById('radio' + counter).checked = true;
    document.getElementById('radio' + counter).checked == true ? atualizaLabel() : false;
}

function slide() {
    atualizaSlide()
    counter++
    if(atualizaLabel) {
        setTimeout(slide, 8000)
    }
}

function backSlide() {
    counter == 1 ? counter = inputs.length : counter--;
    atualizaSlide();
}

function nextSlide() {
    if(this.id == 'arrow-next') {
        counter++;
        atualizaSlide()
    } else {
        backSlide()
    }   
}

slide();
arrowSlide.forEach(arrow => arrow.addEventListener('click', nextSlide)); 

inputs.forEach(btnInput => {
    btnInput.addEventListener('click', el => {
        const clickInput = el.target.dataset.input;
        counter = clickInput;
        atualizaSlide()
    })
})
