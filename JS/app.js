let bouton = document.getElementById("top-button");

window.addEventListener('scroll', () => {
    if(window.scrollY > -10 && window.scrollY < 500) {
        bouton.style.display="none";
    } else {
        bouton.style.display="block";
    }
});

const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  loader.classList.add('fondu-out');
});