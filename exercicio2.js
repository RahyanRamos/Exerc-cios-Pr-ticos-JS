const prompts = require('prompts');

const questions = [
  {
    type: 'number',
    name: 'numero',
    message: 'Informe o número limite da soma:'
  }
];

(async () => {
  const response = await prompts(questions);
  const numero = response.numero
  let soma = 0
  for (let i = 1; i <= numero; i++) {
    soma = soma + i
  }
  console.log(soma)
})();