
const inputs = document.querySelectorAll('[data-input]');
let counter = 1;
function slide() {
    
    inputs.forEach(btnInput => {
        btnInput.addEventListener('click', el => {
            const clickInput = el.target.dataset.input;
            counter = clickInput;
        })
    })

    if (counter > inputs.length) {
        counter = 1;
    }

    document.getElementById('radio' + counter).checked = true;
    counter++;

    setTimeout(slide, 1000)
}

slide();