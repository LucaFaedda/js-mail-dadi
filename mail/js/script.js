
const email = ["goku@gmail.com", "bonjy91@gmail.com", "neoinmatrix@hotmail.it", "kratosspaccadei@gmail.com", "gandalfilgrigio@gmail.com", "mitrandir@gmail.com" ]

let email_utente = prompt("Inserisci la tua email")

let flag = false; // ci serve per determinare se l'elemento è in lista avendo solo un risultato 

for(i=0 ; i< email.length ; i++){
    if(email[i] == email_utente){   
         // controlliamo se è presente in lista ma se facessimo anche else ci comparirebbero in console anche tutti gli altri elementi. Quindi flag diventa true 
        flag = true
    }

}

if(flag == true ){
    console.log("email in lista")
}
else{
    console.log("email non presente")
}