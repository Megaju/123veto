

function affichageConsultation(display) {
	document.getElementById("dent").style.display="none";
	document.getElementById("yeux-oreilles").style.display="none";
	document.getElementById("pelage").style.display="none";
	document.getElementById("parasite").style.display="none";
	document.getElementById("vaccin-chien").style.display="none";
	document.getElementById("vaccin-chat").style.display="none";
	document.getElementById("id").style.display="none";
	document.getElementById("education").style.display="none";
	document.getElementById(display).style.display="block";
};