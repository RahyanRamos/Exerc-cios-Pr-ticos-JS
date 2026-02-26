const prompts = require('prompts');

const questions = [
  {
    type: 'number',
    name: 'nota1',
    message: 'Informe a nota 1:'
  },
  {
    type: 'number',
    name: 'nota2',
    message: 'Informe a nota 2:'
  },
  {
    type: 'number',
    name: 'nota3',
    message: 'Informe a nota 3:'
  },
  {
    type: 'number',
    name: 'nota4',
    message: 'Informe a nota 4:'
  }
];

(async () => {
  const response = await prompts(questions);
  let soma = response.nota1 + response.nota2 + response.nota3 + response.nota4
  let media = soma / 4
  console.log(`A média das notas é: ${media}`)
})();