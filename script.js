const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const resultOuput = document.getElementById("output");

const checkUserInput = () => {
    const inputNumber = parseInt(numberInput.value);

    if(!numberInput.value){
        alert("Please enter a valid number");
    } else if(inputNumber < 0){
        alert("Please enter a number greater than or equal to 1");        
    } else if(inputNumber >= 4000){
        alert("Please enter a number less than or equal to 3999");
    }

    numberInput.value="";
}

const numeralToRoman = (input) => {

}

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        checkUserInput();
    }
});