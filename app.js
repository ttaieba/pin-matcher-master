function getPin() {
    const pin = Math.round(Math.random() * 10000);

    const pinSting = pin + '';
    if (pinSting.length == 4) {
        return pin;
    } else {
        return getPin();

    }

}


function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}


// keypad intractive

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {


        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

});

function varify() {
    const pins = document.getElementById('display-pin').value;
    const type = document.getElementById('typed-number').value;
    const successMsgs = document.getElementById('success')
    const worningMsgs = document.getElementById('worning')

    if (pins == type) {

        successMsgs.style.display = 'block';
        worningMsgs.style.display = 'none';
    }
    else {
        successMsgs.style.display = 'none';
        worningMsgs.style.display = 'block';

    }
    // console.log('going to vary');
}

