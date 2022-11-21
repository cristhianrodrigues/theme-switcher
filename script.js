const labelSwitch = document.querySelector('.switch');
const slider = document.querySelector('.slider');
const page = document.querySelector('body');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    slider.classList.toggle('labelDarkModeOn');
    page.classList.toggle('darkTheme');
    page.style.transition = "none";
    slider.style.transition = "none";
};

labelSwitch.addEventListener('click', function (){
    slider.classList.toggle('labelDarkModeOn');
    page.classList.toggle('darkTheme');
    page.style.transition = "0.5s";
    slider.style.transition = "0.5s";
    console.log(labelSwitch.classList);
});

