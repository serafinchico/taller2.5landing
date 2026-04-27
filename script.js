document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let mail = document.getElementById("mail").value;
    let edad = document.getElementById("edad").value;

    document.getElementById("mensaje").innerText =
    "Muchas gracias " + nombre + " (" + edad + " años), te contactaremos en " + mail;

    this.reset();
});