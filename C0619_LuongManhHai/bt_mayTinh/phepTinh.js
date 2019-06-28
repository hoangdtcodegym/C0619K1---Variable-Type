function cong() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;

    let result;

    let number1 =parseInt(n1);
    let number2 =parseInt(n2);

    result = number1 + number2;
    document.getElementById('result2').innerHTML=" " + result;
}

function tru() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;

    let result;

    let number1 =parseInt(n1);
    let number2 =parseInt(n2);

    result = number1 - number2;
    document.getElementById('result2').innerHTML=result;
}

function nhan() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;

    let result;

    let number1 =parseInt(n1);
    let number2 =parseInt(n2);

    result = number1 * number2;
    document.getElementById('result2').innerHTML=result;
}


function chia() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;

    let result;

    let number1 =parseInt(n1);
    let number2 =parseInt(n2);

    result = number1 / number2;
    document.getElementById('result2').innerHTML=result;
}