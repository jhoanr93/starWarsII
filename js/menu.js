// Crea las variables para usarlas mas adelante
var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

//Agrega un listener qeu ejecute una accion cuando de click
btnMenu.addEventListener('click', function() {
	// body...
	nav.classList.toggle('mostrar');
})