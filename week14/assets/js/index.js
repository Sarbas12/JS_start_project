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

function changeColor() {
    let div = document.getElementsByTagName('div');
    div.style.background = "green";
}

// function changeColor(colorValue) {
//     document.body.style.background =
//         document.getElementById(colorValue).dataset.color;
// }


document.getElementsByTagName('input').value = "";

document.getElementById('mybutton').onclick = function () {
    window.location.href = 'https://developer.mozilla.org/ru/';
};


// !--Виды объявления функции-- >
//Function Declaration
// function yourName() {
//     let yourName = prompt('Как тебя зовут?');
//     alert(`Привет, ${yourName}!`);
// }

//arrow functions
let yourName = () => {
    let yourName = prompt('Как тебя зовут?');
    alert(`Привет, ${yourName}!`);
}

// Function Expression
// let yourName = function () {
//     let yourName = prompt("как тебя зовут?");
//     alert(`Hello, ${yourName}!`);
// }

// let inputs = table.getElementsByTagName('input');
// console.log(inputs);

// Таблицу с id = "age-table"
// Все элементы label внутри этой таблицы(их три)
// Форму form с именем name = "search"
let table = document.getElementById('age-table');
console.log(table);
let labels = table.getElementsByTagName('label');
console.log(labels);
let form = document.getElementsByName('search');
console.log(form);