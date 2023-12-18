let szamlista = []
function szamFelvetel() {
    var ertek = document.getElementById("szam").value
    if (ertek > 0 || ertek <= 0) {
        szamlista.push(ertek)
    }
    console.log(szamlista)
}