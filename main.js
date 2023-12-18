let szamlista = []
function szamFelvetel() {
    var ertek = document.getElementById("szam").value
    if (ertek > 0 || ertek <= 0) {
        szamlista.push(ertek)
        ujListaelem(ertek)
        minKivalaszt();
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

function minKivalaszt() {
    let max = 0
    for (let i = 0; i < szamlista.length; i++) {
        if (szamlista[i] > max) {
            max = szamlista[i]
        }
    }
    document.getElementById("min").innerHTML = "Max: " + max
}