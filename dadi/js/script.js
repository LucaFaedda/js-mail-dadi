
let num_player = Math.floor(Math.random()* 6) + 1

console.log(`numero:giocatore: ${num_player}`)

let num_pc = Math.floor(Math.random()* 6) + 1

console.log(`numero:giocatore: ${num_pc}`)

const play_game = document.getElementById('premi')

play_game.addEventListener('click', function(){

    if(num_player ==  num_pc){
        console.log("Rilancia")
        alert('Rilancia')
    }
    else if(num_player > num_pc){
        console.log("Giocatore HAI vinto")
        alert('Hai vinto')
    }
    else {
        console.log("Giocatore HAI perso")
        alert('Hai perso')
    }

})    

