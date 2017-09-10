var d = document;
d.querySelector("#enviar").onclick = validarDatos;
d.getElementById("error").style.color = "red";
d.getElementById("error").style.fontWeight = 'bold';
var reglaNom = /^[a-zñ | A-ZÑ]+[a-zñ | A-ZÑ\s]+[a-zñ | A-ZÑ]$/

function validarDatos() {
	var el = d.getElementById("nombres");
	if (!validarRequeridos(el)) return;
	if (!validarERegular(el, reglaNom)) return;

	var el = d.getElementById("apellidos");
	if (!validarRequeridos(el)) return;
	var el = d.getElementById("email");
	if (!validarRequeridos(el)) return;

	/* todo bien*/
	d.getElementById("error").style.color = "green";
	d.getElementById("error").style.fontWeight = 'bold';
	d.getElementById("error").innerHTML = "Tobo bien. Enviando..."
}
function validarRequeridos(el) {
	sw = true;
	if (el.checkValidity() == false && el.required) {
		d.getElementById("error").innerHTML = "<p>debe ingresar " + el.id + " </p>"
		sw = false
	} else
		d.getElementById("error").innerHTML = "";
	return sw;
}
function validarERegular(el, regla) {

	sw = true;
	var valor = el.value;
	if (!regla.test(valor)) {
		d.getElementById("error").innerHTML = "<p> Debe ingresar un " + el.id + " Valido(s)</p>"
		sw = false;
	}
	return sw;
}