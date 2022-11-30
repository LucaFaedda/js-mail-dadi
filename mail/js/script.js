
const email = ["goku@gmail.com", "bonjy91@gmail.com", "neoinmatrix@hotmail.it", "kratosspaccadei@gmail.com", "gandalfilgrigio@gmail.com", "mitrandir@gmail.com" ]

let email_utente = prompt("Inserisci la tua email")


for(i=0 ; i< email.length ; i++){
    if(i == email_utente){
        console.log(`email in lista ${i}`)
    }
    else{
        console.log(`email non in lista ${i}`)
    }
}