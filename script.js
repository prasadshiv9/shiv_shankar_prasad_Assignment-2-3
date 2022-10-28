var input = document.getElementById('input');
var letter = document.getElementById('letter');

var output = document.getElementById("output");




function occurence() {

    let inputValue = input.value;
    let letterValue = letter.value;

    let count = 0;

    for (let i = 0; i < inputValue.length; i++) {


        if (inputValue.charAt(i) == letterValue) {
            count = i;
            break;

        }



    }

    if (count === 0) {
        output.innerHTML = `The letter ${letterValue} does not exist in the sentence`;
        output.style.color="red"
    }
    else {
        output.innerHTML = (inputValue.substring(count + 1))
        output.style.color="green"
    }



}


