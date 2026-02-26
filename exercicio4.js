const prompts = require('prompts');

const questions = [
  {
    type: 'text',
    name: 'aluno',
    message: 'Informe o nome do aluno:'
  },
  {
    type: 'number',
    name: 'nota1',
    message: 'Informe a primeira nota do aluno:'
  },
  {
    type: 'number',
    name: 'nota2',
    message: 'Informe a segunda nota do aluno:'
  }
];

(async () => {
  const response = await prompts(questions);

  console.log(response)
//   const salario = response.salario
//   const salarioReajustado = salario * 1.2
//   const inss = salarioReajustado * 0.08
//   const salarioFinal = salarioReajustado - inss

//   console.log(`Salário Inicial: ${salario} \n Salário Reajustado: ${salarioReajustado} \n Desconto do INSS: ${inss} \n Salário Final: ${salarioFinal}`)
})();