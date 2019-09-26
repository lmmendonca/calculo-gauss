function calcularGauss(matriz, resultado) {
  for (let i = 0; i < matriz.length; i++) {
    matriz[i].push(resultado[i]);
  }

  let comprimentoMatriz = matriz.length;

  for (let i = 0; i < comprimentoMatriz; i++) {
    let maiorValorColuna = Math.abs(matriz[i][i]);
    let linhaMaiorValor = i;

    // Procura o maior valor da coluna
    for (let k = (i + 1); (k < comprimentoMatriz); k++) {
      if (Math.abs(matriz[k][i]) <= maiorValorColuna) {
        continue;
      }
      maiorValorColuna = Math.abs(matriz[k][i]);
      linhaMaiorValor = k;
    }

    for (let k = i; (k < comprimentoMatriz + 1); k++) {
      let tmp = matriz[linhaMaiorValor][k];
    
      matriz[linhaMaiorValor][k] = matriz[i][k];
      matriz[i][k] = tmp;
    }

    // Zera as linhas abaixo do pivô
    for (let k = (i + 1); (k < comprimentoMatriz); k++) {
      let c = -matriz[k][i] / matriz[i][i];
    
      for (let j = i; (j < comprimentoMatriz + 1); j++) {
        if (i === j) {
          matriz[k][j] = 0;
          continue;
        }
        matriz[k][j] += c * matriz[i][j];
      }
    }
    console.log(matriz);
  }

  resultado = preencherLista(0, comprimentoMatriz, 0);

  for (let i = (comprimentoMatriz - 1); (i > -1); i--) {
    resultado[i] = matriz[i][comprimentoMatriz] / matriz[i][i];

    for (let j = (i - 1); (j > -1); j--) {
      matriz[j][comprimentoMatriz] -= matriz[j][i] * resultado[i];
    }
  }
  console.log(matriz);
  return resultado;
}

function preencherLista(indice, max, valor) {
  let lista = [];
  for (; indice < max; indice++) {
    lista.push(valor);
  }
  return lista;
}

let matrizA = [
  [1, 1, 1],
  [2, 1, 2],
  [1, 2, 3]
];
let matrizB = [6, 10, 14];

console.log(
  calcularGauss(matrizA, matrizB)
);