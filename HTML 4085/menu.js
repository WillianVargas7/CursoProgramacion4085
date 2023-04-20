var ini = "Inicio";
var prog = "Nuestra Programación";
var gal = "Galeria";
var cont = "Contactanos";

var menu = document.getElementById("menu");

menu.innerHTML = `
  <a href="/index.html">${ini}</a>
  <a href="/programacion.html">${prog}</a>
  <a href="/galeria.html">${gal}</a>
  <a href="/contactenos.html">${cont}</a>
`