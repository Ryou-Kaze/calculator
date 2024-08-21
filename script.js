

const calculationRows = document.querySelector('#operationRow')
const resultRows = document.querySelector('#resultRow')
const num1Display = document.querySelector('#num1')
const num2Display = document.querySelector('#num2')
const operatorDisplay = document.querySelector('#operator')
const addition = (num1,num2) =>{
    return num1+num2
}
const subtraction = (num1,num2) =>{
    return num1-num2 
}
const multiplication = (num1,num2) =>{
    return num1 * num2 
}
const division = (num1,num2) =>{
    if(num1 != 0 && num2 != 0){
        return num1/num2
    }
    else{
        resultRows.textContent="Error! Pls reset";
    }
}
const modulo = (num1,num2) =>{
    return num1 % num2
}

const operate= (num1,num2)=>{
    if (operator== "+"){
        return addition(num1,num2);
    }
    else if(operator =="X"){
        return multiplication(num1,num2);
    }
    else if(operator == "/"){
        return division(num1,num2);
    }
    else if(operator == "-"){
        return subtraction(num1,num2);
    }
    else if(operator =="%"){
        return modulo(num1,num2);
    }
}
const customToFixed = (num)=>{
    numString= num.toString();
    if(numString.includes(".")){
        const decimalPart = (numString.split(".")[1]);
        if(decimalPart.length > 3){
            return num.toFixed(3);
        }
    }  
    return num;
}

let num1 =null;
let num2 =null;
let operator =null;



const numberButtonFunc = (num) =>{
    if (operator==null){
        num1Display.append(num)
    }
    else{
        num2Display.append(num)
    }
}

const reset = document.querySelector('#clear')
reset.addEventListener('click',() =>{
    num1=null;
    num2=null;
    operator=null;
    num1Display.textContent="";
    num2Display.textContent="";
    operatorDisplay.textContent="";
    resultRows.textContent="0";
});

const back = document.querySelector('#back');
back.addEventListener('click',() =>{
    if(num2Display.textContent!=""){
        num2Display.textContent=num2Display.textContent.slice(0,-1);
        
    }
    else if(operatorDisplay.textContent!=""){
        operatorDisplay.textContent="";
        operator=null;
    }
    else{
        num1Display.textContent=num1Display.textContent.slice(0,-1);
    }
});

const one = document.querySelector('#button1')
one.addEventListener('click',()=>numberButtonFunc(one.textContent))

const two = document.querySelector('#button2')
two.addEventListener('click',()=>numberButtonFunc(two.textContent))

const three = document.querySelector('#button3')
three.addEventListener('click',()=>numberButtonFunc(three.textContent))

const four = document.querySelector('#button4')
four.addEventListener('click',()=>numberButtonFunc(four.textContent))

const five = document.querySelector('#button5')
five.addEventListener('click',()=>numberButtonFunc(five.textContent))

const six = document.querySelector('#button6')
six.addEventListener('click',()=>numberButtonFunc(six.textContent))

const seven = document.querySelector('#button7')
seven.addEventListener('click',()=>numberButtonFunc(seven.textContent))

const eight = document.querySelector('#button8')
eight.addEventListener('click',()=>numberButtonFunc(eight.textContent))

const nine = document.querySelector('#button9')
nine.addEventListener('click',()=>numberButtonFunc(nine.textContent))

const zero = document.querySelector('#button0')
zero.addEventListener('click',()=>numberButtonFunc(zero.textContent))

const decimal = document.querySelector('#decimal')
decimal.addEventListener('click',()=>{
    if (operator==null && num1Display.textContent != "" && (!num1Display.textContent.includes("."))){
        num1Display.append(decimal.textContent)
    }
    else if(operator!=null && num2Display.textContent != "" && (!num2Display.textContent.includes("."))) {
        num2Display.append(decimal.textContent)
    }
});

const plus = document.querySelector('#plus')
plus.addEventListener('click',()=>{
    if (operator==null && !isNaN(parseFloat(num1Display.textContent))){
        operator = "+";
        operatorDisplay.append("+")
    }
    else{
        num1=parseFloat(num1Display.textContent);
        num2=parseFloat(num2Display.textContent);
        if (num2 !== null && !isNaN(num2)){//always include !=null and !isNaN for null check
            num1=customToFixed(operate(num1,num2));
            num1Display.textContent=num1;
            num2Display.textContent="";
            operatorDisplay.textContent="";
        }
        if(!isNaN(num1)){
            operator = "+";
            operatorDisplay.textContent="";
            operatorDisplay.append("+")
        }
    }
});

const multiply = document.querySelector('#multiplier')
multiply.addEventListener('click',()=>{
    if (operator==null&& !isNaN(parseFloat(num1Display.textContent))){
        operator = "X";
        operatorDisplay.append("X")
    }
    else{
        num1=parseFloat(num1Display.textContent);
        num2=parseFloat(num2Display.textContent);
        if (num2 !== null && !isNaN(num2)){
            num1=customToFixed(operate(num1,num2));
            num1Display.textContent=num1;
            num2Display.textContent="";
            operatorDisplay.textContent=""
        }
        if(!isNaN(num1)){
            operator = "X";
            operatorDisplay.textContent="";
            operatorDisplay.append("X")
        }
    }
});

const divisor = document.querySelector('#divisor')
divisor.addEventListener('click',()=>{
    if (operator==null && !isNaN(parseFloat(num1Display.textContent))){
        operator = "/";
        operatorDisplay.append("/")
    }
    else{
        num1=parseFloat(num1Display.textContent);
        num2=parseFloat(num2Display.textContent);
        if (num2 !== null && !isNaN(num2)){
            num1=customToFixed(operate(num1,num2));
            num1Display.textContent=num1;
            num2Display.textContent="";
            operatorDisplay.textContent="";
        }
        if (!isNaN(num1)){
            operator = "/";
            operatorDisplay.textContent="";
            operatorDisplay.append("/")
        }
    }
});

const modulor = document.querySelector('#modulo')
modulor.addEventListener('click',()=>{
    if (operator==null && !isNaN(parseFloat(num1Display.textContent))){
        operator = "%";
        operatorDisplay.append("%")
    }
    else{
        num1=parseFloat(num1Display.textContent);
        num2=parseFloat(num2Display.textContent);
        if (num2 !== null && !isNaN(num2)){
            num1=customToFixed(operate(num1,num2));
            num1Display.textContent=num1;
            num2Display.textContent="";
            operatorDisplay.textContent="";
        }
        if (!isNaN(num1)){
            operator = "%";
            operatorDisplay.textContent="";
            operatorDisplay.append("%")
        }
    }
});

const minus = document.querySelector('#minus')
minus.addEventListener('click',()=>{
    if (operator==null && num1Display.textContent == ""){
        num1Display.append("-");
    }
    else if(operatorDisplay.textContent != "" && num2Display.textContent == ""){
        num2Display.append("-");
    }
    else{
        num1=parseFloat(num1Display.textContent);
        num2=parseFloat(num2Display.textContent);
        if (num2 !== null && !isNaN(num2)){
            num1=customToFixed(operate(num1,num2));
            num1Display.textContent=num1;
            num2Display.textContent="";
            operatorDisplay.textContent="";
        }
        if (!isNaN(num1)){
            operator = "-";
            operatorDisplay.textContent="";
            operatorDisplay.append("-")
        }
    }

});

const equal = document.querySelector('#equal')
equal.addEventListener('click',()=>{
    num1=parseFloat(num1Display.textContent);
    num2=parseFloat(num2Display.textContent);
    if (num2 !== null && !isNaN(num2)){
        num1=customToFixed(operate(num1,num2));
        resultRows.textContent=num1;
    }

});