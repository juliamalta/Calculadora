function soma() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  var resultado = num1 + num2;

  document.getElementById("resultado").innerHTML =
    document.getElementById("resultado").innerHTML + "A soma é " + resultado;

  console.log(resultado);
}

function subtracao() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  var resultado = num1 - num2;

  document.getElementById("resultado").innerHTML =
    document.getElementById("resultado").innerHTML +
    "A subtração é " +
    resultado;

  console.log(resultado);
}

function mutplicaçao() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  var resultado = num1 * num2;

  document.getElementById("resultado").innerHTML =
    document.getElementById("resultado").innerHTML +
    "A multiplicação é " +
    resultado;

  console.log(resultado);
}

function diviçao() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  var resultado = num1 / num2;

  document.getElementById("resultado").innerHTML =
    document.getElementById("resultado").innerHTML + "A divição é " + resultado;

  console.log(resultado);
}
