
let num_player = Math.floor(Math.random()* 6) + 1

console.log(`numero:giocatore: ${num_player}`)

let num_pc = Math.floor(Math.random()* 6) + 1

console.log(`numero:giocatore: ${num_pc}`)


if(num_player ==  num_pc){
    console.log("Rilancia")
}
else if(num_player > num_pc){
    console.log("Giocatore HAI vinto")
}
else {
    console.log("Giocatore HAI perso")
}

