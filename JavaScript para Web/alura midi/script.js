/* Botoes */
const botoes = document.querySelectorAll('.tecla');

const teclaPom = document.querySelector('.tecla_pom');
const teclaClap = document.querySelector('.tecla_clap');
const teclaTim = document.querySelector('.tecla_tim');

const teclaPuff = document.querySelector('.tecla_puff');
const teclaSplash = document.querySelector('.tecla_splash');
const teclaToim = document.querySelector('.tecla_toim');

const teclaPsh = document.querySelector('.tecla_psh');
const teclaTic = document.querySelector('.tecla_tic');
const teclaTom = document.querySelector('.tecla_tom');

/* Sons */
const somPom = document.querySelector('#som_tecla_pom');
const somClap = document.querySelector('#som_tecla_clap');
const somTim = document.querySelector('#som_tecla_tim');

const somPuff = document.querySelector('#som_tecla_puff');
const somSplash = document.querySelector('#som_tecla_splash');
const somToim = document.querySelector('#som_tecla_toim');

const somPsh = document.querySelector('#som_tecla_psh');
const somTic = document.querySelector('#som_tecla_tic');
const somTom = document.querySelector('#som_tecla_tom');

/* Eventos */
teclaPom.addEventListener('click', () => {
    somPom.play();
});

teclaClap.addEventListener('click', () => {
    somClap.play();
});

teclaTim.addEventListener('click', () => {
    somTim.play();
});

teclaPuff.addEventListener('click', () => {
    somPuff.play();
});

teclaSplash.addEventListener('click', () => {
    somSplash.play();
});

teclaToim.addEventListener('click', () => {
    somToim.play();
});

teclaPsh.addEventListener('click', () => {
    somPsh.play();
});

teclaTic.addEventListener('click', () => {
    somTic.play();
});

teclaTom.addEventListener('click', () => {
    somTom.play();
});