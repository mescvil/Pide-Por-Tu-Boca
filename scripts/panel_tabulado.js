document.getElementById("tab-defecto").click();

function muestraTab(evt, nombreTab) {
	var contenido_tab, botones_tab;

	contenido_tab = document.getElementsByClassName("contenido-tab");
	for (var i = 0; i < contenido_tab.length; i++) {
		contenido_tab[i].style.display = "none";
	}

	botones_tab = document.getElementsByClassName("boton-tab");
	for (var i = 0; i < botones_tab.length; i++) {
		botones_tab[i].className = "boton-tab";
	}

	document.getElementById(nombreTab).style.display = "block";
	evt.currentTarget.className += " boton-activo";
}
