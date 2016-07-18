var unfold = true;

function unfoldMenu() {
    if (unfold === false) {
        unfold = true;
        document.getElementById('menu').style.display = 'none';
    } else {
        unfold = false;
        document.getElementById('menu').style.display = 'block';
    }
}