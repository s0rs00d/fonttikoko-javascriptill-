var clickCount = 0;

function myFunction() {
    var list = document.getElementById("myList");
    var paragraph = document.getElementById("lause");
    clickCount++;

if (clickCount == 1) {
    list.style.fontFamily = "Roboto, sans-serif";
    paragraph.textContent = "Käytössä on nyt fontti Roboto";
    paragraph.style.fontFamily = "Roboto, sans-serif";
}

if (clickCount == 2) {
    list.style.fontFamily = "Mansalva, cursive";
    paragraph.textContent = "Käytössä on nyt fontti Mansalva";
    paragraph.style.fontFamily = "Mansalva, cursive";
}

if (clickCount == 3) {
    list.style.fontFamily = "Grenze, serif";
    paragraph.textContent = "Käytössä on nyt fontti Grenze";
    paragraph.style.fontFamily = "Grenze, serif";
}

if (clickCount == 4) {
    list.style.fontFamily = "Turret Road, cursive";
    paragraph.textContent = "Käytössä on nyt fontti Turret Road";
    paragraph.style.fontFamily = "Turret Road, cursive";
}

if (clickCount == 5) {
    list.style.fontFamily = "Courier New, monospace";
    paragraph.textContent = "Käytössä on nyt fontti Courier New";
    paragraph.style.fontFamily = "Courier New, monospace";
    clickCount = 0;
}

}


function myFunction2() {
    var list = document.getElementById("myList2");
    var paragraph = document.getElementById("lause2");
    clickCount++;

    if (clickCount === 1) {
        list.style.fontSize = "20px";
        paragraph.textContent = "Fonttikoko on nyt 20px";
        paragraph.style.fontSize = "20px";

    }

    if (clickCount === 2) {
        list.style.fontSize = "24px";
        paragraph.textContent = "Fonttikoko on nyt 24px";
        paragraph.style.fontSize = "24px";
    }

    if (clickCount === 3) {
        list.style.fontSize = "28px";
        paragraph.textContent = "Fonttikoko on nyt 28px";
        paragraph.style.fontSize = "28px";
    }

    if (clickCount === 4) {
        list.style.fontSize = "32px";
        paragraph.textContent = "Fonttikoko on nyt 32px";
        paragraph.style.fontSize = "36px";
    }

    if (clickCount === 5) {
        list.style.fontSize = "16px";
        paragraph.textContent = "Fonttikoko on nyt 16px";
        paragraph.style.fontSize = "16px"
        clickCount = 0;
    }

}

