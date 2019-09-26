
function calcularGauss(matriz, x, y) {
  // Verifica se o pivo é zero
  if (matriz[x][y] === 0) {
      console.log('Pivo zero', x, y);

      for (let i = (x + 1); i < matriz.length; i++) {
          if (matriz[i][y] === 0 && i === x) {
              continue;
          }

          matriz = trocarLinha(matriz, x, i);
          break;
      }
  }

  if (matriz[x][y] !== 0) {
      console.log('Pivo', x, y);
      matriz = calcularPivo(matriz, x, y);
  }

  if (!isEscalonado(matriz)) {
      matriz = calcularGauss(matriz, x + 1, y + 1);
      return matriz;
  }

  return matriz;
}

function trocarLinha(matriz, linha1, linha2) {
  let temp = matriz[linha1];

  matriz[linha1] = matriz[linha2];
  matriz[linha2] = temp;

  return matriz;
}

function multiplicarArray(arrayX, numero) {
  let v = [];

  for (let i = 0; i < arrayX.length; i++) {
      v[i] = arrayX[i] * numero;
  }

  return v;
}

function somarArrays(array1, array2) {
  let novoArray = [];

  for (let i = 0; i < array1.length; i++) {
      novoArray[i] = array1[i] + array2[i];
  }

  return novoArray;
}

function preencherLista(indice, max, valor) {
  let lista = [];

  for (; indice < max; indice++) {
      lista.push(valor);
  }

  return lista;
}

function calcularPivo(matriz, x, y) {
  // verificar se é a última linha
  if (x !== matriz.length - 1) {
      let valorA = matriz[x][y];

      for (let i = x + 1; i < matriz.length; i++) {
          let valorB = matriz[i][y];

          if (valorB === 0) {
              continue;
          }

          matriz[i] = somarArrays(
              matriz[i],
              multiplicarArray(matriz[x], ((-valorB) / valorA))
          );

          console.log('matriz', matriz);
      }

      return matriz
  }

  let valorA = matriz[x - 1][y];
  let valorB = matriz[x][y];

  matriz[x] = somarArrays(
      matriz[x],
      multiplicarArray(matriz[x - 1], ((-valorB) / valorA))
  );

  console.log('matriz', matriz);

  return matriz;
}

function isEscalonado(matrix) {
  let comprimentoMaximo = matrix[0].length;
  let espacoAnterior = 0;

  for (let i = 0; (i < matrix.length); i++) {
      for (let j = 0; j < comprimentoMaximo; j++) {

          if (matrix[i][j] === 0 || i === 0) {
              continue;
          }

          if (j > espacoAnterior) {
              espacoAnterior = j;
          } else {
              return false;
          }

          break;
      }
  }

  return true;
}


function calcularX(matriz) {
  let resultado = [];

  for (let i = 0; i < matriz.length; i++) {
      resultado.push(
          matriz[matriz.length - 2]
      );
  }

  comprimentoMatriz = matriz.length;
  resultado = preencherLista(0, comprimentoMatriz, 0);

  for (let i = (comprimentoMatriz - 1); (i > -1); i--) {
      resultado[i] = matriz[i][comprimentoMatriz] / matriz[i][i];
      for (let j = (i - 1); (j > -1); j--) {
          matriz[j][comprimentoMatriz] -= matriz[j][i] * resultado[i];
      }
  }

  return resultado;
}

let teste = [
  [1, 1, 1, 6],
  [2, 1, 2, 10],
  [1, 2, 3, 14]
];
let resultado = calcularGauss(teste, 0, 0);
console.log(resultado);
console.log(calcularX(resultado));