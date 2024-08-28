const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % totalItems;
    carousel.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + totalItems) % totalItems;
    carousel.style.transform = `translateX(-${index * 100}%)`;
});
