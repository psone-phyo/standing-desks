const btnpop = document.getElementsByClassName('btn-popup')[0];
const poptxt = document.getElementsByClassName('popuptxt')[0];
const crosspop = document.getElementsByClassName('cross-popup')[0];

const popup = () => {
    btnpop.style.display = 'none';
    poptxt.style.display = 'block';
}

const closepopup = () => {
    btnpop.style.display = 'block';
    poptxt.style.display = 'none';
}
btnpop.addEventListener('click', popup);
crosspop.addEventListener('click', closepopup);