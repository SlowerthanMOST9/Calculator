document.getElementById("pageTitle").innerHTML = "Mr.Sekol coding calculator";

function mathAddition(){
let numbOne = parseFloat(document.getElementById("numberOne").value)
let numbtwo = parseFloat(document.getElementById("numberTwo").value)
document.getElementById("correctAnswer").innerHTML = "the correct answer is: " + parseFloat
(numbOne + numbtwo)
};

function mathSubtraction(){
    let numbOne = parseFloat(document.getElementById("numberOne").value)
    let numbtwo = parseFloat(document.getElementById("numberTwo").value)
    document.getElementById("correctAnswer").innerHTML = "the correct answer is: " + parseFloat
    (numbOne - numbtwo)
    };

    function mathMultiply(){
        let numbOne = parseFloat(document.getElementById("numberOne").value)
        let numbtwo = parseFloat(document.getElementById("numberTwo").value)
        document.getElementById("correctAnswer").innerHTML = "the correct answer is: " + parseFloat
        (numbOne * numbtwo)
        };

        function mathDivision(){
            let numbOne = parseFloat(document.getElementById("numberOne").value)
            let numbtwo = parseFloat(document.getElementById("numberTwo").value)
            document.getElementById("correctAnswer").innerHTML = "the correct answer is: " + parseFloat
            (numbOne / numbtwo)
            };