const inputField = document.querySelector("#calcInput");

//making the button works
document.querySelector("#clear").addEventListener("click", function() {
    inputField.value = "";
});

document.querySelector("#divide").addEventListener("click", function() {
    inputField.value += "÷";
});

document.querySelector("#multiply").addEventListener("click", function() {
    inputField.value += "×";
});

document.querySelector("#btn7").addEventListener("click", function() {
    inputField.value += "7";
});

document.querySelector("#btn8").addEventListener("click", function() {
    inputField.value += "8";
});

document.querySelector("#btn9").addEventListener("click", function() {
    inputField.value += "9";
});

document.querySelector("#minus").addEventListener("click", function() {
    inputField.value += "-";
});

document.querySelector("#btn4").addEventListener("click", function() {
    inputField.value += "4";
});

document.querySelector("#btn5").addEventListener("click", function() {
    inputField.value += "5";
});

document.querySelector("#btn6").addEventListener("click", function() {
    inputField.value += "6";
});

document.querySelector("#plus").addEventListener("click", function() {
    inputField.value += "+";
});

document.querySelector("#btn1").addEventListener("click", function() {
    inputField.value += "1";
});

document.querySelector("#btn2").addEventListener("click", function() {
    inputField.value += "2";
});

document.querySelector("#btn3").addEventListener("click", function() {
    inputField.value += "3";
});

document.querySelector("#percent").addEventListener("click", function() {
    inputField.value += "%";
});

document.querySelector("#btn0").addEventListener("click", function() {
    inputField.value += "0";
});

document.querySelector("#dot").addEventListener("click", function() {
    inputField.value += ".";
});

//backspace button
document.querySelector("#backSpace").addEventListener("click", function() {
    let currentValue = inputField.value;
    
    // Check if there is text to delete
    if (currentValue.length > 0) {
        // Remove the last character from the text
        inputField.value = currentValue.slice(0, -1);
    }
});

// Calculation button
document.querySelector("#output").addEventListener("click", function() {
    try {
        let expression = inputField.value;
        expression = expression.replace(/×/g, "*");
        expression = expression.replace(/÷/g, "/");
        
        let result = eval(expression);
        // Result ko input field mein set karen
        inputField.value = result;
    } catch (error) {
        // Agar koi error aata hai, to use handle karen
        console.error(error);
        inputField.value = "Wrong input";
    }
});
                                        
