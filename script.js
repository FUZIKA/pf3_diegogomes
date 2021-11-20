const calcular = document.getElementById('calcular');

function calculo() {
  const nome = document.getElementById('nome').value;

  const valor = document.getElementById('valor').value;
  const juros = document.getElementById('juros').value;
  const parcelas = document.getElementById('parcelas').value;

  const resultado = document.getElementById('resultado');


  if ( nome !== '' && valor !== '' && juros !== '' && parcelas !== '' ) {
    const valor_poupado = ( valor * (((1 + juros / 100) ** parcelas - 1) / (juros / 100)));

    resultado.textContent = `${nome},Se você aplicar R$ ${valor}, à taxa de juros de ${juros}% ao mês, durante ${parcelas} meses, acumulará uma poupança de R$ ${valor_poupado}`;
  
  } else {
    resultado.textContent = 'Para o seu valor poupado, preencha todos os campos.';
  }
}

calcular.addEventListener('click', calculo);