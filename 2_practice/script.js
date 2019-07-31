const newstarInfo = {
name: 'newstar',
age: '28',
favSinger: [
    {
    group: 'SNSD',
    favMem: 'Taeyeon'
    },
    {
    group: 'RedVelvet',
    favMem: 'Irene'
    }
],
};

console.log(newstarInfo.favSinger[0].favMem);

// console은 Javascript의 내장 함수(Build-in Function)
console.log(console);

function sayHi(name, coin) {
console.log("Hi! " + name + ". You have " + coin + ' coins :)');
};
sayHi("newstar", 390);

function sayHiNew(name, coin) {
// 백틱을 사용하는 새로운 선언 방식
return (`Hi! ${name}. You have ${coin} coins :)`);
};
const greetNewstar = sayHiNew("newstar", 390);
// greetNewstar의 값은 sayHiNew 함수의 return 값.
console.log(greetNewstar);

const cal = {
plus: function(a, b) {
    return a + b;
},
minus: function(a, b) {
    return a - b;
},
multiply: function(a, b) {
    return a * b;
},
divide: function(a, b) {
    return a / b;
},
sqrt: function(a) {
    return a ** (1/2);
},
remainder: function(a, b) {
    return a % b;
}
}

const result = {
plus: cal.plus(5, 5),
minus: cal.minus(5, 5),
multiply: cal.multiply(5, 5),
divide: cal.divide(5, 5),
sqrt: cal.sqrt(9),
remainder: cal.remainder(12, 5)
}

console.log(result);

// #2.2 JS DOM Functions

const title = document.querySelector('#title');
title.innerHTML = "Hi! From JS."

// 모든 html은 객체

// #2.4 Events and event handlers

function resizeHandler(event) {
console.log('I have been resized.')
console.log(event); // event라는 argument를 이용해 이벤트가 발생한 element를 불러올 수 있다.
}
window.addEventListener('resize', resizeHandler); // resizeHandler() (X) resizeHandler (O)
// 이 안에서 함수 뒤에 ()괄호를 붙여 사용하면 resize 이벤트가 일어날 때 함술르 실행하는 것이 아니라 렌더링 즉시 해당 함수를 실행하게 됨.

function clickHandler(e) {
    e.target.style.color = 'red';
}
window.addEventListener('mouseenter', clickHandler);

//#2.7 DOM - If else - Function practice part Two
// CSS는 CSS가, 로직은 JS가 처리하도록. 각 언어의 역할을 생각하여 코딩하는 것이 좋다.

const clickedClass = "clicked"; 

function handleClick() {
    const hasClass = title.classList.contains(clickedClass); // contains : value를 가지는지 체크하는 메소드
    title.classList.toggle(clickedClass);
}
function init() {
    title.addEventListener('click', handleClick);
}
init();