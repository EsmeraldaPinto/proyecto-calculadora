let botonsuma = document.getElementById('sumar');
let respuestasuma = document.getElementById('respuesta');
botonsuma.addEventListener('click', hacersuma);

let botonresta = document.getElementById('restar');
let respuestaresta = document.getElementById('respuesta');
botonresta.addEventListener('click', hacerresta);

let botonmultiplicar = document.getElementById('multiplicar');
let respuestamult = document.getElementById('respuesta');
botonmultiplicar.addEventListener('click', hacermultiplicacion);

let botondividir = document.getElementById('dividir');
let respuestadividir = document.getElementById('respuesta');
botondividir.addEventListener('click', hacerdivision);

function hacersuma(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1+n2;
    respuesta.innerHTML= `El resultado de la suma es: ${n3}`;
}

function hacerresta(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1-n2;
    respuesta.innerHTML= `El resultado de la resta es: ${n3}`;
}

function hacermultiplicacion(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1*n2;
    respuesta.innerHTML= `El resultado de la multiplicación es: ${n3}`;
}

function hacerdivision(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1/n2;
    respuesta.innerHTML= `El resultado de la división n es: ${n3}`;
}