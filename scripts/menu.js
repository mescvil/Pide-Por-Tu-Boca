function muestraMenu() {
	var menu = document.getElementById("nav-alt");

	if (menu.style.display == "none") {
		menu.style.display = "block";
		document.getElementById("ico-boton").src = "imagenes/iconos/close.png";
	} else {
		menu.style.display = "none";
		document.getElementById("ico-boton").src = "imagenes/iconos/menu_alt.png";
	}
}
