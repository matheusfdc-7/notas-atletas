Este projeto calcula a média válida de notas de atletas, seguindo a regra:
Cada atleta possui 5 notas.
Para calcular a média válida, o código:
Ordena as notas,
Remove a menor e a maior,
Calcula a média das 3 notas do meio.
No final, o programa exibe no console o nome do atleta, as notas obtidas e a média válida.
################################ Estrutura de dados usada #############################
Array de objetos: atletas
A variável atletas é um array que armazena vários objetos, onde cada objeto representa um atleta:
nome: string com o nome do atleta
notas: array de números com as notas recebidas
Exemplo de um atleta:
nome: "Cesar Abascal"
notas: [10, 9.34, 8.42, 10, 7.88]
################################## Funções do projeto ####################
notasValidas(notas)
Responsável por selecionar apenas as notas que entram no cálculo da média.
O que ela faz:
  Cria uma cópia do array com [...] (spread operator) para não alterar o original
  Ordena as notas em ordem crescente usando .sort((a, b) => a - b)
  Pega as 3 notas do meio usando .slice(1, 4)
  Por que slice(1, 4)?
  Após ordenar 5 notas, o índice:
  0 é a menor nota
  4 é a maior nota
  Então slice(1,4) retorna os índices 1,2,3 (as 3 notas intermediárias).
  Recursos de JS usados aqui:
  Spread Operator ([...notas]) → copia array
  Array.sort() com função de comparação numérica
  Array.slice() para extrair um trecho do array
calcularMedia(atleta)
  Responsável por calcular a média válida de um atleta.
  Etapas:
  Chama notasValidas(atleta.notas) para obter as 3 notas válidas
  Soma as notas com um loop for
  Divide a soma pela quantidade de notas válidas (validas.length)
  Recursos de JS usados aqui:
  Acesso a propriedade de objeto (atleta.notas)
  Laço for para somar  
  .length para obter o tamanho do array

exibirResultados(atletas)
  Responsável por percorrer todos os atletas e imprimir os resultados no console.
  Etapas:
  Percorre o array atletas com um for
  Para cada atleta:
  calcula a média com calcularMedia(atleta)
  exibe:
  Atleta: <nome>
  Notas Obtidas: <lista>
  Média Válida: <valor>
  Para mostrar as notas em formato de texto, é usado:  
  notasExibicao.join(",") → transforma o array em uma string separada por vírgula
  A exibição é feita com template literals (crase ` `) e \n para quebrar linhas.      
  Recursos de JS usados aqui:
  Template literals (`texto ${variavel}`)          
  console.log()  
  Array.join() para formatar saída
  Caracteres de escape (\n)
#######################chama a função principal e imprime todos os resultados no console.#######################  
exibirResultados(atletas);
