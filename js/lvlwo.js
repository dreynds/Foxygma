var correto = "🔓Proxima Fase.";
var errado = "Você <span><strong>Errou</strong></span>."

function capturar() {
    var awnser = document.querySelector("#valor").value;
    if (awnser == "canidae" || awnser == "Canidae" || awnser == "CANIDAE") {
        document.querySelector("#decisao").innerHTML = "<a href='../html/anythingwithoutspace.html'><button>PROXIMA FASE</button></a>"
    } else {
        document.querySelector("#decisao").innerHTML = errado
    }
}