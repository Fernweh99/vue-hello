/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

console.log("Vue OK",Vue)

const app = new Vue({
  el: "#root",
  data: {
    message: "Vue OK",
    source: "https://picsum.photos/500/300?random=7"
  }
})