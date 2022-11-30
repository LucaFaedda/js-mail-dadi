
const email = ["goku@gmail.com", "bonjy91@gmail.com", "neoinmatrix@hotmail.it", "kratosspaccadei@gmail.com", "gandalfilgrigio@gmail.com", "mitrandir@gmail.com" ]

let email_utente = prompt("Inserisci la tua email")

let flag = false;

for(i=0 ; i< email.length ; i++){
    if(email[i] == email_utente){
        flag = true
        
    }

}

if(flag == true ){
    console.log("email in lista")
}
else{
    console.log("email non presente")
}