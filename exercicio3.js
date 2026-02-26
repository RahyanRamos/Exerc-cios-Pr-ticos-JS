const prompts = require('prompts');

const questions = [
  {
    type: 'number',
    name: 'salario',
    message: 'Informe o salário atual do colaborador:'
  }
];

(async () => {
  const response = await prompts(questions);
  const salario = response.salario
  const salarioReajustado = salario * 1.2
  const inss = salarioReajustado * 0.08
  const salarioFinal = salarioReajustado - inss

  console.log(`Salário Inicial: ${salario} \n Salário Reajustado: ${salarioReajustado} \n Desconto do INSS: ${inss} \n Salário Final: ${salarioFinal}`)
})();