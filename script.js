let slider = document.querySelector('#slider');
let active = document.querySelector('#active');

let line1 = document.querySelector('#line1');
let line2 = document.querySelector('#line2');
let line3 = document.querySelector('#line3');
let line4 = document.querySelector('#line4');

line1.addEventListener('click', () => {
    slider.style.transform = 'translateX(0)';
    active.style.top = '0'
});
line2.addEventListener('click', () => {
    slider.style.transform = 'translateX(-25%)';
    active.style.top = '25%'
});
line3.addEventListener('click', () => {
    slider.style.transform = 'translateX(-50%)';
    active.style.top = '50%'
});
line4.addEventListener('click', () => {
    slider.style.transform = 'translateX(-75%)';
    active.style.top = '75%'
});