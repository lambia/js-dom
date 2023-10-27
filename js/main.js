let nomeUtente = prompt("Inserisci il tuo nome");
let el = document.querySelector("#message");
let btn = document.querySelector("#mioBottone")

// btn.addEventListener(nomeEvento, funzioneDaEseguire);
btn.addEventListener("click", function() {
    console.log( el.classList );
});


if( nomeUtente==null || nomeUtente=="" ) {
    el.classList.add("error");
    el.innerHTML = "Utente anonimo, non sei il benvenuto";

} else if (nomeUtente=="luca") {
    el.classList.add("superuser");
    el.innerHTML = `Benvenuto, ${nomeUtente}`;

} else {
    el.classList.add("valid");
    el.innerHTML = `Benvenuto, ${nomeUtente}`;
}
