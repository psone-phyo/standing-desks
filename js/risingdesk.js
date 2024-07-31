let index = 0;
let count   = document.getElementById('count');
let shop = document.querySelectorAll('.btnshop');

const cartappear = () => {
    const cart = document.getElementsByClassName('cart')[0];
    if (window.scrollY >= window.innerHeight * 0.6) {
        cart.style.display = 'block';
    } else {
        cart.style.display = 'none';
    }
};

const shopincrement = () => {
    index++;
    count.innerText = index;
};

window.addEventListener('scroll', cartappear);
shop.forEach(button => {
    button.addEventListener('click', shopincrement);
});