// Cash Machine
// O Problema
// Desenvolva uma aplicação que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico.

// Sua aplicação deve:

// Entregar sempre o menor número de notas possíveis
// Sacar valores apenas com as notas disponíveis
// Ter saldo do cliente infinito
// Ter quantidade de notas infinita
// Possuir apenas notas de R$ 100,00, R$ 50,00, R$ 20,00 e R$ 10,00
// Retornar mensagens de erro em caso de entradas inválidas
// Observação:

// Exemplos:
// Entrada: 30.00
// Resultado: [20.00, 10.00]

// Entrada: 80.00
// Resultado: [50.00, 20.00, 10.00]

// Entrada: 125.00
// Resultado: Erro de notas indisponíveis

// Entrada: -130.00
// Resultado: Erro de valor inválido

// Entrada: NULL
// Resultado: Erro de valor nulo

console.clear();

document.addEventListener("DOMContentLoaded", () => {
  const n0 = document.getElementById("n0");
  const n1 = document.getElementById("n1");
  const n2 = document.getElementById("n2");
  const n3 = document.getElementById("n3");
  const n4 = document.getElementById("n4");
  const n5 = document.getElementById("n5");
  const n6 = document.getElementById("n6");
  const n7 = document.getElementById("n7");
  const n8 = document.getElementById("n8");
  const n9 = document.getElementById("n9");

  const clear = document.getElementById("clear");
  const confirm = document.getElementById("confirm");

  n0.addEventListener("click", changeDisplayer);
  n1.addEventListener("click", changeDisplayer);
  n2.addEventListener("click", changeDisplayer);
  n3.addEventListener("click", changeDisplayer);
  n4.addEventListener("click", changeDisplayer);
  n5.addEventListener("click", changeDisplayer);
  n6.addEventListener("click", changeDisplayer);
  n7.addEventListener("click", changeDisplayer);
  n8.addEventListener("click", changeDisplayer);
  n9.addEventListener("click", changeDisplayer);

  clear.addEventListener("click", clearDisplayer);
  confirm.addEventListener("click", withdraw);
});

// FUNCTIONS
function changeDisplayer(event) {
  if (displayer.value > 9999) {
    alert("Saldo indisponivel para o valor digitado.");
    return;
  }
  displayer.value = displayer.value + event.target.innerText;
}

function clearDisplayer() {
  const billsDisplayer = document.getElementById("bills-displayer");
  displayer.value = "";
  billsDisplayer.innerHTML = "";
}

function withdraw() {
  const billsDisplayer = document.getElementById("bills-displayer");
  let notas = parseInt(displayer.value);

  if (notas < 0) {
    alert("400 Error! Valor invalido");
    clearDisplayer();
  } else if (notas === "") {
    alert("400 Error! Valor nulo");
    clearDisplayer();
  } else if (notas > 9999) {
    alert("Saldo indisponivel para valor digitado.");
    clearDisplayer();
  } else if (isNaN(notas)) {
    alert("400 Error ou valor nulo! Informar apenas valores numericos");
    clearDisplayer();
  } else if (notas % 10 !== 0) {
    alert("400 Error! Notas indisponiveis");
    clearDisplayer();
  } else {
    while (notas > 0) {
      if (notas >= 100) {
        notas = notas - 100;
        billsDisplayer.innerHTML = billsDisplayer.innerHTML + " R$ 100";
      } else if (notas >= 50) {
        notas = notas - 50;
        billsDisplayer.innerHTML = billsDisplayer.innerHTML + " R$ 50";
      } else if (notas >= 20) {
        notas = notas - 20;
        billsDisplayer.innerHTML = billsDisplayer.innerHTML + " R$ 20";
      } else if (notas >= 10) {
        notas = notas - 10;
        billsDisplayer.innerHTML = billsDisplayer.innerHTML + " R$ 10";
      }
    }
  }
}
