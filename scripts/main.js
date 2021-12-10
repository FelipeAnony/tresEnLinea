var validador;
var celValue = 'X';
const cel1 = document.querySelector('.cel1');
const cel2 = document.querySelector('.cel2');
const cel3 = document.querySelector('.cel3');
const cel4 = document.querySelector('.cel4');
const cel5 = document.querySelector('.cel5');
const cel6 = document.querySelector('.cel6');
const cel7 = document.querySelector('.cel7');
const cel8 = document.querySelector('.cel8');
const cel9 = document.querySelector('.cel9');

const victoriaX = document.querySelector('.victoria-x');
const victoriaO = document.querySelector('.victoria-o');
const empate = document.querySelector('.empate');

document.querySelector('.button').addEventListener('click', clear);

document.querySelector('.container1').addEventListener('click', evt => {insert(cel1)});
document.querySelector('.container2').addEventListener('click', evt => {insert(cel2)});
document.querySelector('.container3').addEventListener('click', evt => {insert(cel3)});
document.querySelector('.container4').addEventListener('click', evt => {insert(cel4)});
document.querySelector('.container5').addEventListener('click', evt => {insert(cel5)});
document.querySelector('.container6').addEventListener('click', evt => {insert(cel6)});
document.querySelector('.container7').addEventListener('click', evt => {insert(cel7)});
document.querySelector('.container8').addEventListener('click', evt => {insert(cel8)});
document.querySelector('.container9').addEventListener('click', evt => {insert(cel9)});

function clear() {
    cel1.innerHTML = '';
    cel2.innerHTML = '';
    cel3.innerHTML = '';
    cel4.innerHTML = '';
    cel5.innerHTML = '';
    cel6.innerHTML = '';
    cel7.innerHTML = '';
    cel8.innerHTML = '';
    cel9.innerHTML = '';
    validador = false;
    celValue = 'X'
}

const alertVencedor = (jogador) => alert(`EL jugador ${jogador} ganó!`);

function validarResultado() {

    let validadorEmpate = true;
    let value1 = cel1.innerHTML;
    let value2 = cel2.innerHTML;
    let value3 = cel3.innerHTML;
    let value4 = cel4.innerHTML;
    let value5 = cel5.innerHTML;
    let value6 = cel6.innerHTML;
    let value7 = cel7.innerHTML;
    let value8 = cel8.innerHTML;
    let value9 = cel9.innerHTML;

    //validar x
    if (value1 == 'X' && value2 == 'X' && value3 == 'X' && validador == true){
        alertVencedor('x')
        victoriaX.innerHTML = Number(victoriaX.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    if (value4 == 'X' && value5 == 'X' && value6 == 'X' && validador == true){
        alertVencedor('x')
        victoriaX.innerHTML = Number(victoriaX.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    if (value7 == 'X' && value8 == 'X' && value9 == 'X' && validador == true){
        alertVencedor('x')
        victoriaX.innerHTML = Number(victoriaX.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    if (value1 == 'X' && value4 == 'X' && value7 == 'X' && validador == true){
        alertVencedor('x')
        victoriaX.innerHTML = Number(victoriaX.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    if (value2 == 'X' && value5 == 'X' && value8 == 'X' && validador == true){
        alertVencedor('x')
        victoriaX.innerHTML = Number(victoriaX.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    if (value3 == 'X' && value6 == 'X' && value9 == 'X' && validador == true){
        alertVencedor('x')
        victoriaX.innerHTML = Number(victoriaX.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    if (value1 == 'X' && value5 == 'X' && value9 == 'X' && validador == true){
        alertVencedor('x')
        victoriaX.innerHTML = Number(victoriaX.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    if (value3 == 'X' && value5 == 'X' && value7 == 'X' && validador == true){
        alertVencedor('x')
        victoriaX.innerHTML = Number(victoriaX.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    //validar O

    if (value1 == 'O' && value2 == 'O' && value3 == 'O' && validador == true){
        alertVencedor('O');
        victoriaO.innerHTML = Number(victoriaO.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    if (value4 == 'O' && value5 == 'O' && value6 == 'O' && validador == true){
        alertVencedor('O');
        victoriaX.innerHTML = Number(victoriaX.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    if (value7 == 'O' && value8 == 'O' && value9 == 'O' && validador == true){
        alertVencedor('O');
        victoriaX.innerHTML = Number(victoriaX.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    if (value1 == 'O' && value4 == 'O' && value7 == 'O' && validador == true){
        alertVencedor('O');
        victoriaX.innerHTML = Number(victoriaX.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    if (value2 == 'O' && value5 == 'O' && value8 == 'O' && validador == true){
        alertVencedor('O');
        victoriaX.innerHTML = Number(victoriaX.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    if (value3 == 'O' && value6 == 'O' && value9 == 'O' && validador == true){
        alertVencedor('O');
        victoriaX.innerHTML = Number(victoriaX.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    if (value1 == 'O' && value5 == 'O' && value9 == 'O' && validador == true){
        alertVencedor('O');
        victoriaX.innerHTML = Number(victoriaX.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    if (value3 == 'O' && value5 == 'O' && value7 == 'O' && validador == true){
        alertVencedor('O');
        victoriaX.innerHTML = Number(victoriaX.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
    if (validadorEmpate == true && value1 != '' && value2 != '' && value3!= '' && value4 != '' && value5 != '' && value6 != '' && value7 != '' && value8 != '' && value9 != '') {
        alert('Juego empatado!');
        empate.innerHTML = Number(empate.innerHTML) + 1;
        validadorEmpate = false;
        clear();
    }
}

setInterval(() => validarResultado(), 200);

function insert(p) {
    if (celValue == 'X') {
        if (p.innerHTML == '') {
            p.innerHTML = celValue;
            celValue = 'O'
        }
    }
    else {
        if (p.innerHTML == '') {
            p.innerHTML = celValue; 
            celValue = 'X'
        }
    }
    validador = true;
}