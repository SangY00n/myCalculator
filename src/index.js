let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let num0 = document.getElementById("num0");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let equal = document.getElementById("equal");

let ACbutton = document.getElementsByClassName("button calc__keyboard__ac")[0];


let calcDisplay = document.getElementsByClassName("calc__display")[0];
let historyTable = document.getElementsByClassName("history__table")[0];

let preValue = null;
let curValue = null;

let preOperator = null;
let result = null;


let operatorActivated = false;

let curRecord='';

// num1.addEventListener('click', function(){
//     console.log("Click Num1");
//     calcDisplay.innerText += '<tr><td>1</tr></td>';
// })

num1.onclick = function(){
    // document.getElementsByClassName('calc__display')[0].innerHTML+='1234';
    if(calcDisplay.innerHTML == '0' || operatorActivated == true) {
        calcDisplay.innerHTML = '1';
    }
    else {
        calcDisplay.innerHTML += '1';
    }
    operatorActivated = false;
}
num2.onclick = function(){
    if(calcDisplay.innerHTML == '0' || operatorActivated == true) {
        calcDisplay.innerHTML = '2';
    }
    else {
        calcDisplay.innerHTML += '2';
    }
    operatorActivated = false;
}
num3.onclick = function(){
    if(calcDisplay.innerHTML == '0' || operatorActivated == true) {
        calcDisplay.innerHTML = '3';
    }
    else {
        calcDisplay.innerHTML += '3';
    }
    operatorActivated = false;
}
num4.onclick = function(){
    if(calcDisplay.innerHTML == '0' || operatorActivated == true) {
        calcDisplay.innerHTML = '4';
    }
    else {
        calcDisplay.innerHTML += '4';
    }
    operatorActivated = false;
}
num5.onclick = function(){
    if(calcDisplay.innerHTML == '0' || operatorActivated == true) {
        calcDisplay.innerHTML = '5';
    }
    else {
        calcDisplay.innerHTML += '5';
    }
    operatorActivated = false;
}
num6.onclick = function(){
    if(calcDisplay.innerHTML == '0' || operatorActivated == true) {
        calcDisplay.innerHTML = '6';
    }
    else {
        calcDisplay.innerHTML += '6';
    }
    operatorActivated = false;
}
num7.onclick = function(){
    if(calcDisplay.innerHTML == '0' || operatorActivated == true) {
        calcDisplay.innerHTML = '7';
    }
    else {
        calcDisplay.innerHTML += '7';
    }
    operatorActivated = false;
}
num8.onclick = function(){
    if(calcDisplay.innerHTML == '0' || operatorActivated == true) {
        calcDisplay.innerHTML = '8';
    }
    else {
        calcDisplay.innerHTML += '8';
    }
    operatorActivated = false;
}
num9.onclick = function(){
    if(calcDisplay.innerHTML == '0' || operatorActivated == true) {
        calcDisplay.innerHTML = '9';
    }
    else {
        calcDisplay.innerHTML += '9';
    }
    operatorActivated = false;
}
num0.onclick = function(){

    if ( operatorActivated == true ) {
        console.log('opreator is Activated')
        calcDisplay.innerHTML = '0';
    } else if(calcDisplay.innerHTML != '0') {
        calcDisplay.innerHTML += '0';
    }
    operatorActivated = false;
}


function clickOperator(curOperator){
    if(preValue === null || preOperator == null || preOperator == 'equal') {
        preValue = calcDisplay.innerHTML;
        if(preValue == '') {
            preValue = null;
        }
        recordHistory(preValue, curOperator);
    } else {
        curValue = calcDisplay.innerHTML;
        calculate();
        calcDisplay.innerHTML = result;
        recordHistory(curValue, curOperator);
        preValue = result;
    }

    if(preValue!== null) {
        preOperator = curOperator;
        operatorActivated = true;
    }

}

plus.onclick = () => {
    clickOperator('plus')
};
minus.onclick = () => {
    clickOperator('minus')
};
multiply.onclick = () => {
    clickOperator('multiply')
};
divide.onclick = () => {
    clickOperator('divide')
};


equal.onclick = function(){
    if(!preOperator || preOperator == null || preOperator == 'equal') {
        // 값 변화 x
    } else {
        curValue = calcDisplay.innerHTML;
        calculate();
        calcDisplay.innerHTML = result;

        preOperator = 'equal';

        recordHistory(curValue, 'equal');
        preValue = result;

    }

    
    preOperator = 'equal';
    operatorActivated = true;


    // historyTable.innerHTML += ( calcDisplay.innerHTML + '=' + result );
}

ACbutton.onclick = function(){
    calcDisplay.innerHTML = '';
    preValue=null;
    preOperator=null;
    result=0;
}


function calculate() {
    switch(preOperator) {
        case 'plus': result = Number(preValue) + Number(curValue);
        break;

        case 'minus': result = Number(preValue) - Number(curValue);
        break;

        case 'multiply': result = Number(preValue) * Number(curValue);
        break;

        case 'divide': result = Number(preValue) / Number(curValue);
        break;

        default: console.log(preOperator);
    }
}

function recordHistory(value, Operator){
    if(value === null) {
        console.log("입력된 값이 없습니다. value 값이 " + value + "입니다.");
    }
    else {
        switch(Operator) {
            
            case 'equal': 
                curRecord += (value + ' ' + '=' + ' ' + result);
                historyTable.innerHTML += ('<tr><td>' + curRecord + '</td></tr>');
                curRecord = '';
                break;

            default: 
                switch(Operator) {
                    case 'plus': operatorSign='+';
                    break;
                    case 'minus': operatorSign='-';
                    break;
                    case 'multiply': operatorSign='*';
                    break;
                    case 'divide': operatorSign='/';
                    break;
                    default: operatorSign='undefined Sign'
                }
                curRecord += (value + ' ' + operatorSign + ' ');
        }

        console.log(value + " is recorded by " + Operator);
    }

}



// 마이너스 기호 붙이는 거 아직 구현하지 못함.
// 계산 순서도 그냥 먼저 하는 순서대로,,