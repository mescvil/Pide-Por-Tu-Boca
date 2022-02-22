var indice = 0;
muestraImagenes();

function muestraImagenes() {
	var imagenes = document.getElementsByClassName("imagen-carrusel");

	for (var i = 0; i < imagenes.length; i++) {
		imagenes[i].style.display = "none";
	}

	indice++;
	if (indice > imagenes.length) {
		indice = 1;
	}

	imagenes[indice - 1].style.display = "block";
	setTimeout(muestraImagenes, 3000);
}
