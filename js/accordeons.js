//accordeon prestations
function affiche_presta(target) {
	document.getElementById("consultation").style.display="none";
	document.getElementById("imagerie").style.display="none";
	document.getElementById("analyse").style.display="none";
	document.getElementById("chirurgie").style.display="none";
	document.getElementById("hospitalisation").style.display="none";
	document.getElementById("nac").style.display="none";
	document.getElementById(target).style.display="block";
};

//accordeon conseils
function affiche_conseil(target) {
	document.getElementById("dent").style.display="none";
	document.getElementById("yeux-oreilles").style.display="none";
	document.getElementById("pelage").style.display="none";
	document.getElementById("parasite").style.display="none";
	document.getElementById("vaccin-chien").style.display="none";
	document.getElementById("vaccin-chat").style.display="none";
	document.getElementById("id").style.display="none";
	document.getElementById("education").style.display="none";
	document.getElementById(target).style.display="block";
};

//accordeon vente
function affiche_vente(target) {
	document.getElementById("medicament").style.display="none";
	document.getElementById("alimentation").style.display="none";
	document.getElementById("index").style.display="none";
	document.getElementById(target).style.display="block";
};