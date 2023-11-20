var input = document.querySelector('.input');
var nine = document.querySelector('.nine');
var eight = document.querySelector('.eight');
var seven = document.querySelector('.seven');
var six =document.querySelector('.six')
var five =document.querySelector('.five');
var four =document.querySelector('.four');
var three =document.querySelector('.three');
var two =document.querySelector('.two');
var one =document.querySelector('.one');
var zero =document.querySelector('.zero');

nine.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = `${inputValue} 9`;
});

eight.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = `${inputValue} 8`;
});

seven.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = `${inputValue} 7`;
});

six.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = `${inputValue} 6`;
});

five.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = `${inputValue} 5`;
});

four.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = `${inputValue} 4`;
});

three.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = `${inputValue} 3`;
});

two.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = `${inputValue} 2`;
});

one.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = `${inputValue} 1`;
});

zero.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = `${inputValue} 0`;
});




var input = document.querySelector('.input');
var add = document.querySelector('.Add');
var minus = document.querySelector('.minus');
var multiply = document.querySelector('.multiply');
var division =document.querySelector('.division')
var equal =document.querySelector('.equal');
var clear =document.querySelector('.clear');

add.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = `${inputValue} +`;
});

minus.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = `${inputValue} -`;
});

multiply.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = `${inputValue} *`;
});

division.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = `${inputValue} /`;
});

equal.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = eval(`${inputValue}`);
});

clear.addEventListener('click', function(){
    let inputValue = input.value;
    input.value = ``;
});

