var correto = "🔓Proxima Fase.";
var errado = "Você <span><strong>Errou</strong></span>."

function capturar() {
    var awnser = document.querySelector("#valor").value;
    if (awnser == "ártico" || awnser == "Ártico") {
        document.querySelector("#decisao").innerHTML = "<a href='#'><button>PROXIMA FASE</button></a>"
    } else {
        document.querySelector("#decisao").innerHTML = errado
    }

}