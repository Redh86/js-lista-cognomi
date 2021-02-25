var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"]

var cgnUtn = prompt ("Inserire cognome");

cognomi.push(cgnUtn);

cognomi.sort();

console.log(cognomi)

for (var i = 0; i < cognomi.length; i++)
    if (cgnUtn == cognomi[i]) {
        console.log("Posizione umana: " + (i + 1))
    }


