var correto = "🔓Proxima Fase.";
var errado = "Você <span><strong>Errou</strong></span>."

function capturar() {
    var awnser = document.querySelector("#valor").value;
    if (awnser == "Níquel" || awnser == "NÍQUEL" || awnser == "níquel") {
        document.querySelector("#decisao").innerHTML = "<a href='../html/nothinghere.html'><button>PROXIMA FASE</button></a>"
    } else {
        document.querySelector("#decisao").innerHTML = errado
    }
}