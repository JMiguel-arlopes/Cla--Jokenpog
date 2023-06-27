const inputs = document.querySelectorAll('[data-input]');
const listaLabel = document.querySelectorAll('[data-label]');

let counter = 1;

function atualizaLabel() {
    listaLabel.forEach(el => el.classList.remove('active'));
    document.querySelector(`[data-label="${counter}"]`).classList.add('active');
}

function slide() {
    
    counter > inputs.length ? counter = 1 : false;
    document.getElementById('radio' + counter).checked = true;
    document.getElementById('radio' + counter).checked == true ? atualizaLabel() : false;

    counter++
    setTimeout(slide, 6000);
}

inputs.forEach(btnInput => {
    btnInput.addEventListener('click', el => {
        const clickInput = el.target.dataset.input;
        counter = clickInput;
        atualizaLabel();
    })
})

slide();
