
// function generateNum(){ 
//     // let guessNum = document.getElementById('guess').innerHTML
// }

let randomNum = Math.ceil(Math.random() * 3)
let replayBtn = document.getElementById('replay')
function guessNumber(){
    let guessNum = document.getElementById('guess').value

    if(guessNum == 0){
        document.getElementById("winOrLossAlert").innerHTML = "You didnt enter a valid number";
        replayBtn.style.visibility = 'visible';
        return;
    }
    else if(guessNum > 3){
        document.getElementById("winOrLossAlert").innerHTML = "Oops!!! Your guess is too high";
        replayBtn.style.visibility = 'visible';
        return;
    }
    else if(guessNum == randomNum){
        document.getElementById("winOrLossAlert").innerHTML = "Hurry!!! You guessed right";
        document.getElementById("winOrLossAlert").style.color = 'green'
        replayBtn.style.visibility = 'visible';
        //console.log("Hurry!!! You guessed right")
    }
    else{
        document.getElementById("winOrLossAlert").innerHTML = "OOOPs!!! You are wrong, try again";
        document.getElementById("winOrLossAlert").style.color = 'red'
        replayBtn.style.visibility = 'visible';
        //console.log("OOOPs!!! You are wrong, try again")

    }
    document.getElementById('guessedNum').innerHTML = "You guessed: " + guessNum
    document.getElementById('randomNum').innerHTML = "The number is: " + randomNum
    console.log("Guessed NUmber: " + guessNum)
    console.log("Random NUmber: " + randomNum)
}

//guessNumber()