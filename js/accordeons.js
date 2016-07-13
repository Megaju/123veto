function affich_consultation() {
	document.getElementById("consultation").style.display="block";
	document.getElementById("imagerie").style.display="none";
	document.getElementById("analyse").style.display="none";
	document.getElementById("chirurgie").style.display="none";
	document.getElementById("hospitalisation").style.display="none";
	document.getElementById("nac").style.display="none";
};

function affich_imagerie() {
	document.getElementById("consultation").style.display="none";
	document.getElementById("imagerie").style.display="block";
	document.getElementById("analyse").style.display="none";
	document.getElementById("chirurgie").style.display="none";
	document.getElementById("hospitalisation").style.display="none";
	document.getElementById("nac").style.display="none";
};

function affich_analyse() {
	document.getElementById("consultation").style.display="none";
	document.getElementById("imagerie").style.display="none";
	document.getElementById("analyse").style.display="block";
	document.getElementById("chirurgie").style.display="none";
	document.getElementById("hospitalisation").style.display="none";
	document.getElementById("nac").style.display="none";
};

function affich_chirurgie() {
	document.getElementById("consultation").style.display="none";
	document.getElementById("imagerie").style.display="none";
	document.getElementById("analyse").style.display="none";
	document.getElementById("chirurgie").style.display="block";
	document.getElementById("hospitalisation").style.display="none";
	document.getElementById("nac").style.display="none";
};

function affich_hospitalisation() {
	document.getElementById("consultation").style.display="none";
	document.getElementById("imagerie").style.display="none";
	document.getElementById("analyse").style.display="none";
	document.getElementById("chirurgie").style.display="none";
	document.getElementById("hospitalisation").style.display="block";
	document.getElementById("nac").style.display="none";
};

function affich_nac() {
	document.getElementById("consultation").style.display="none";
	document.getElementById("imagerie").style.display="none";
	document.getElementById("analyse").style.display="none";
	document.getElementById("chirurgie").style.display="none";
	document.getElementById("hospitalisation").style.display="none";
	document.getElementById("nac").style.display="block";
};
