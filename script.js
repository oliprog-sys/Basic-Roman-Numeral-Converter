const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const resultOutput = document.getElementById("output");

const checkUserInput = () => {
    const inputNumber = parseInt(numberInput.value);

    if(!numberInput.value){        
        resultOutput.textContent = "Please enter a valid number";
        return;
    } else if(inputNumber < 0){       
        resultOutput.textContent = "Please enter a number greater than or equal to 1";
        return;
    } else if(inputNumber >= 4000){    
        resultOutput.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    resultOutput.textContent = numeralToRoman(inputNumber);    
    numberInput.value="";
}

const numeralToRoman = (input) => {
    let romanNum='';
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    for(let i = 0; i < values.length; i++){
        while(input >= values[i]){
            romanNum += symbols[i];
            input -= values[i];
        }
    }

    return romanNum;
}

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        checkUserInput();
    }
});