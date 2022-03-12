const teclas = document.querySelectorAll('.tecla');

for (let i = 0; i < teclas.length; i++) {
    const nomeSom = teclas[i].classList[1].split('_')[1];

    const som = document.querySelector(`#som_tecla_${nomeSom}`);
    
    teclas[i].addEventListener('click', () => som.play());
}