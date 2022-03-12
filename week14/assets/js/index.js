function plus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;

    num2 = document.getElementById('n2').value;

    result = Number(num1) + Number(num2);
    document.getElementById('out').value = result;
}

function minus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;

    num2 = document.getElementById('n2').value;

    result = Number(num1) - Number(num2);
    document.getElementById('out').value = result;
}

function times() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;

    num2 = document.getElementById('n2').value;

    result = Number(num1) * Number(num2);
    document.getElementById('out').value = result;
}

function divide() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;

    num2 = document.getElementById('n2').value;

    result = Number(num1) / Number(num2);
    document.getElementById('out').value = result;
}