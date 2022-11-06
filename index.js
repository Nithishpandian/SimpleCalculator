let calculator = document.getElementById("calculator");
let display = document.getElementById("result");
let buttons = document.querySelectorAll("#button")
let number1 = ""
let operator = ""
let number2 = ""
const operatorArray = ["+","-","*","/"]


// FOR MOUSE
for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function() {

        // ANIMATION 
        let active = buttons[i]
        active.classList.add("animate");
        setTimeout(() => {
            buttons[i].classList.remove("animate");
        }, 180);


        if(buttons[i].value == "c"){
            display.value = "";
            number1 = ""
            operator = ""
            number2 = ""
        }
        else if (buttons[i].value == "="){
            displayResult();
        }
        else if (buttons[i].value != "c" && buttons[i].value != "="){
            let values = buttons[i].value;
            
            if(operatorArray.includes(values)){
                operator += values;
            }
            else{
                if(operator ==""){
                    number1 += values;
                }
                else{
                    number2 += values;
                }
                
            }
            display.value += values; 
        }
        else{
            console.log("Invalid Input");
        }
    })
}

// FOR KEYBOARD

display.addEventListener("keydown",function(event){

    if(event.key == "Enter"){
        displayResult();
    }
    else if (operatorArray.includes(event.shiftKey)){
        operator += event.key;
        console.log("operator: " + operator);
        }
    else if(operatorArray.includes(event.key)){
        operator += event.key;
        console.log("operator: " + operator);
    }
    else if (event.key == "Backspace"){
        
    }
    else{
        if((operator =="") && (event.key != "Shift")){
            number1 += event.key;
            console.log("Number1: " + number1);
        }
        else if ((operator !="") && (event.key != "Shift")){
            number2 += event.key;
            console.log("Number2: " + number2);
        }
    }
})


// DEFAULT FUNCTION
function displayResult() {
    number1 = Number(number1)
    number2 = Number(number2)
    switch (operator) {
        case "+":
            result = number1+number2;
            break;
        case "-":
            result = number1-number2;
            break;
        case "*":
            result = number1*number2;
            break;
        case "/":
            result = number1/number2;
            break;
        default:
            result = "Invalid Input"
            break;
    }
    display.value = result;
}
