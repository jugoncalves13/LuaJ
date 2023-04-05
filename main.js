document.addEventListener( "click" , showcolor);

document.getElementById( "botao" ).addEventListener( "click" , exibenome );

document.getElementById( "btn-soma" ).addEventListener( "click" , soma );

document.getElementById( "btn-subtracao" ).addEventListener( "click" , subtracao );

document.getElementById( "btn-divisao" ).addEventListener( "click" , divisao );

document.getElementById( "btn-multiplicacao" ).addEventListener( "click" , multiplicacao );

function showcolor()
{
    document.body.style.backgroundColor ="red";
}
function exibenome()
{
    let usuario = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerText = "meu nome e:" + usuario
    document.getElementById( "nome" ).value = "";
}
function soma()
{
    let num1 = document.getElementById( "num1" ).value;
    let num2 = document.getElementById( "num2" ).value;
    document.getElementById( "resultado1" ).innerText = parseFloat(num1) + parseFloat(num2); 
}
function subtracao()
{
    let num3 = document.getElementById( "num3" ).value;
    let num4 = document.getElementById( "num4" ).value;
    document.getElementById( "resultado2" ).innerText = parseFloat(num3) + parseFloat(num4); 
}
function divisao()
{
    let num5 = document.getElementById( "num5" ).value;
    let num6 = document.getElementById( "num6" ).value;
    document.getElementById( "resultado3" ).innerText = parseFloat(num5) + parseFloat(num6); 
}
function multiplicacao()
{
    let num7 = document.getElementById( "num7" ).value;
    let num8 = document.getElementById( "num8" ).value;
    document.getElementById( "resultado4" ).innerText = parseFloat(num7) + parseFloat(num8); 
}

