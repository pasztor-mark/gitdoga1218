let szamlista = []
function szamFelvetel() {
    var ertek = document.getElementById("szam").value
    if (ertek > 0 || ertek <= 0) {
        szamlista.push(ertek)
        ujListaelem(ertek)
    }
    
}

function ujListaelem(ertek) {
    var text = document.getElementById("lista").innerHTML
    if (szamlista.length > 1) {
        text += ", "
    }
    text += ertek
    document.getElementById("lista").innerHTML = text
}