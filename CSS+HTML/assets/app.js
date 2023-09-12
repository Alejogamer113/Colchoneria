const menu=document.getElementById('catalogo');
const indicador=document.getElementById('indicador');
const selecciones=document.querySelectorAll('.seccion');


let tamañoIndicador=menu.querySelector('a').offsetWidth;

indicador.style.width =tamañoIndicador + 'px';
console.log(indicador);