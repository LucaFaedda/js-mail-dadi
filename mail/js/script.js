
const email = ["goku@gmail.com", "bonjy91@gmail.com", "neoinmatrix@hotmail.it", "kratosspaccadei@gmail.com", "gandalfilgrigio@gmail.com", "mitrandir@gmail.com" ]

const invia = document.getElementById('invia')

invia.addEventListener('click', function(){
    
    let email_utente = document.getElementById('email')
    
    
    let flag = false; // ci serve per determinare se l'elemento è in lista avendo solo un risultato 
    
    for(i=0 ; i< email.length ; i++){
        if(email[i] == email_utente){   
             // controlliamo se è presente in lista ma se facessimo anche else ci comparirebbero in console anche tutti gli altri elementi. Quindi flag diventa true 
            flag = true
        }
    
    }
    
    if(flag == true ){
        console.log("email in lista")
        document.getElementById('risultato').innerText = "Email in lista"
    }
    else{
        console.log("email non presente")
        document.getElementById('risultato').innerText = "Email non lista"
    }
})

