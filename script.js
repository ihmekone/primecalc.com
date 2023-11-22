
let runningTotal = 0;
let buffer = "0";
let previousOperator;


const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if(previousOperator === null){
                return
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length ===1){
                buffer = '0';
            }else{
                buffer = buffer.substring(0, buffer.length - 1);
    
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
        //case 'sqrt':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol){
    if(buffer === '0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    //const result = Math.sqrt(number);
    //console.log(`The square root of ${number} is ${result}`);
 
    if(runningTotal === 0){
        runningTotal = intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
}
//function doMath(){
  //  var inputNum1=document.form1.input1.value;
    //var result = Math.sqrt(inputNum1);
    //document.form1.answer.value = result;
    //}


function flushOperation(intBuffer){
    if(previousOperator === '+'){
        runningTotal += intBuffer;
    }else if(previousOperator === '−'){
        runningTotal -= intBuffer;
    }else if(previousOperator === '×'){
        runningTotal *= intBuffer
    }else if( previousOperator === '÷'){
        runningTotal /= intBuffer      
    }//else if( previousOperator === 'sqrt'){
        //runningTotal = intBuffer
    //}
}
// √


function handleNumber(numberString){
    if(buffer === '0'){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}

function init(){
    document.querySelector('.calc-napit').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}


init();


// const number = prompt('Enter the number: ');
//const result = Math.sqrt(number);
//console.log(`The square root of ${number} is ${result}`);