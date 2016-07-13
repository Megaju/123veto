//accordeon prestations
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


//accordeon conseils
function affich_dent() {
	document.getElementById("dent").style.display="block";
	document.getElementById("yeux-oreilles").style.display="none";
	document.getElementById("pelage").style.display="none";
	document.getElementById("parasite").style.display="none";
	document.getElementById("vaccin-chien").style.display="none";
	document.getElementById("vaccin-chat").style.display="none";
	document.getElementById("id").style.display="none";
	document.getElementById("education").style.display="none";
};

function affich_yeux() {
	document.getElementById("dent").style.display="none";
	document.getElementById("yeux-oreilles").style.display="block";
	document.getElementById("pelage").style.display="none";
	document.getElementById("parasite").style.display="none";
	document.getElementById("vaccin-chien").style.display="none";
	document.getElementById("vaccin-chat").style.display="none";
	document.getElementById("id").style.display="none";
	document.getElementById("education").style.display="none";
};

function affich_pelage() {
	document.getElementById("dent").style.display="none";
	document.getElementById("yeux-oreilles").style.display="none";
	document.getElementById("pelage").style.display="block";
	document.getElementById("parasite").style.display="none";
	document.getElementById("vaccin-chien").style.display="none";
	document.getElementById("vaccin-chat").style.display="none";
	document.getElementById("id").style.display="none";
	document.getElementById("education").style.display="none";
};

function affich_parasite() {
	document.getElementById("dent").style.display="none";
	document.getElementById("yeux-oreilles").style.display="none";
	document.getElementById("pelage").style.display="none";
	document.getElementById("parasite").style.display="block";
	document.getElementById("vaccin-chien").style.display="none";
	document.getElementById("vaccin-chat").style.display="none";
	document.getElementById("id").style.display="none";
	document.getElementById("education").style.display="none";
};

function affich_vaccinChien() {
	document.getElementById("dent").style.display="none";
	document.getElementById("yeux-oreilles").style.display="none";
	document.getElementById("pelage").style.display="none";
	document.getElementById("parasite").style.display="none";
	document.getElementById("vaccin-chien").style.display="block";
	document.getElementById("vaccin-chat").style.display="none";
	document.getElementById("id").style.display="none";
	document.getElementById("education").style.display="none";
};

function affich_vaccinChat() {
	document.getElementById("dent").style.display="none";
	document.getElementById("yeux-oreilles").style.display="none";
	document.getElementById("pelage").style.display="none";
	document.getElementById("parasite").style.display="none";
	document.getElementById("vaccin-chien").style.display="none";
	document.getElementById("vaccin-chat").style.display="block";
	document.getElementById("id").style.display="none";
	document.getElementById("education").style.display="none";
};

function affich_id() {
	document.getElementById("dent").style.display="none";
	document.getElementById("yeux-oreilles").style.display="none";
	document.getElementById("pelage").style.display="none";
	document.getElementById("parasite").style.display="none";
	document.getElementById("vaccin-chien").style.display="none";
	document.getElementById("vaccin-chat").style.display="none";
	document.getElementById("id").style.display="block";
	document.getElementById("education").style.display="none";
};

function affich_education() {
	document.getElementById("dent").style.display="none";
	document.getElementById("yeux-oreilles").style.display="none";
	document.getElementById("pelage").style.display="none";
	document.getElementById("parasite").style.display="none";
	document.getElementById("vaccin-chien").style.display="none";
	document.getElementById("vaccin-chat").style.display="none";
	document.getElementById("id").style.display="none";
	document.getElementById("education").style.display="block";
};
