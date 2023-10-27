let nomeUtente = prompt("Inserisci il tuo nome");
let el = document.querySelector("#message");
let btn = document.querySelector("#mioBottone");
let input = document.querySelector("#testoUtente");

// btn.addEventListener(nomeEvento, funzioneDaEseguire);
btn.addEventListener("click", function() {
    //Questo codice verrà eseguito solo quando l'utente cliccherà sul button
    //E mostrerà il valore che abbiamo nell'input IN QUEL MOMENTO
    alert("L'utente ha scritto: " + input.value);
});

if( nomeUtente==null || nomeUtente=="" ) {
    el.classList.add("error");
    el.innerHTML = "Utente anonimo, non sei il benvenuto";

} else {
    el.classList.add("valid");
    el.innerHTML = `Benvenuto, ${nomeUtente}`;
}
