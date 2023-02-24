'use strict';



let paginaActual = '#pagina_inicio';

document.querySelectorAll('.btn').forEach( (evento) => {
  evento.addEventListener('click', (e) => {
    document.querySelector(paginaActual).style.animation = `
    animacionSalir 1s ease forwards 0s`;

    paginaActual = '#pagina_'+e.target.id;

    document.querySelector(paginaActual).style.animation = `
    animacionEntrar 1s ease forwards 0s`;
  });
});