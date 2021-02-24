var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"]

var cgnUtn = prompt ("Inserire cognome");
console.log(cgnUtn);

cognomi.push(cgnUtn);

cognomi.sort();
console.log(cognomi);

for (var i = 0; i < cognomi.length; i++)
console.log(cognomi[i]);
