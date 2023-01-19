var correto = "🔓Proxima Fase.";
var errado = "Você <span><strong>Errou</strong></span>."

function capturar() {
    var awnser = document.querySelector("#valor").value;
    if (awnser == "Solanum lycopersicum" || awnser == "solanum lycopersicum" || awnser == "SOLANUM LYCOPERSICUM" || awnser == "Solanum Lycopersicum" || awnser == "solanum Lycopersicum") {
        document.querySelector("#decisao").innerHTML = "<a href='../html/'><button>PROXIMA FASE</button></a>"
    } else {
        document.querySelector("#decisao").innerHTML = errado
    }
}