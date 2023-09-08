let saldoAtual = 10000;

const historico = [];

function depositarValor() 
{
  const valorDeposito = parseFloat(prompt("De quanto será o depósito na sua conta?"));

  if (!isNaN(valorDeposito) && valorDeposito >= 0) {
    saldoAtual += valorDeposito;
    const dataTransacao = new Date();

    historico.push({tipo: "Depósito", valor: valorDeposito, saldo: saldoAtual, data: dataTransacao,}); 

    console.log(`Seu depósito foi realizado com sucesso em ${dataTransacao.toLocaleString()}`);
    console.log(`Seu saldo atual é : R$ ${saldoAtual.toFixed(2)}`);
  } else {
    console.log('Valor de depósito inválido ou negativo !!');
  }
}

function sacarValor() 
{
  const valorSaque = parseFloat(prompt('Quanto deseja sacar da sua conta ?'));

  if (!isNaN(valorSaque) && valorSaque >= 0) { 
    if (saldoAtual >= valorSaque) {
      saldoAtual -= valorSaque;
      const dataTransacao = new Date();

      historico.push({tipo: "Saque", valor: valorSaque, saldo: saldoAtual, data: dataTransacao,}); 

   console.log(`Seu saque foi realizado com sucesso !`);
   console.log(`Seu saldo atual é : R$ ${saldoAtual.toFixed(2)}`);

    } else {
      console.log("Saldo insuficiente para realizar o saque!");
    }

  } else {
    console.log("Valor do saque inválido ou negativo !!");
  }
}

function verSaldo() 
{
  console.log(`O seu Saldo atual é : R$ ${saldoAtual.toFixed(2)}`);
}

function verHistorico() 
{
 
  console.log('Seu Histórico de Transações :');
  historico.forEach((transacao, index) => 
  {
    console.log(`${index + 1}. Tipo: ${transacao.tipo}, Valor: R$ ${transacao.valor}, Saldo após a transação: R$ ${transacao.saldo}, Data: ${transacao.data.toLocaleString()}`);
  });
}

while (true) 
{
  console.log("\nMenu de opções do Sistema Bancário :");
  console.log("1) Depósito");
  console.log("2) Saque");
  console.log("3) Saldo");
  console.log("4) Histórico de transações");
  console.log("5) Sair");
  console.log(`Seu saldo atual: R$ ${saldoAtual.toFixed(2)}`);

  const opcao = Number(prompt("Escolha uma opção :"));

  switch (opcao) 
  {
    case 1:
      depositarValor();
      break;

    case 2:
      sacarValor();
      break;

    case 3:
      verSaldo();
      break;

    case 4:
      verHistorico();
      break;

    case 5:
      console.log("Programa Encerrado !!");
      process.exit(0);
      break;

    default:
      console.log("Opção inválida !!");
  }
}
