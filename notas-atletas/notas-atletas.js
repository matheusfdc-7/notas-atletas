let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5],
  },
];

function notasValidas(notas) {
  let notasOrdenadas = [...notas].sort((a, b) => a - b);
  return notasOrdenadas.slice(1, 4);
}

function calcularMedia(atleta) {
  let validas = notasValidas(atleta.notas);
  let soma = 0;
  for (let i = 0; i < validas.length; i++) {
    soma += validas[i];
  }
  return soma / validas.length;
}

function exibirResultados(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    let notasExibicao = atleta.notas;
    let media = calcularMedia(atleta);
    console.log(`Atleta: ${atleta.nome}\nNotas Obtidas: ${notasExibicao.join(",")}\nMédia Válida: ${media}`);
    console.log("");
  }
}
exibirResultados(atletas);
