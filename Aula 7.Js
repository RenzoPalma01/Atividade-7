//codigo de alerta confirm o prompt simples
   window.alert('Alerta') //cria alerta
   window.alert('Está gostando do curso') //confirmação
  // windows.prompt('Qual seu nome?') //caixa de pergunta

   //variaveis a concatenação
   var nome = window.prompt('Qual seu nome') //var guardar nome
   window.alert('Seja bem vindo ' + nome + '!') //concatenação (seja bem vindo,nome!)

   //criando 2 números
   var n1 = window.prompt('Digite um número ')
   var n2 = window.prompt('Digite outro número ')
   var s = n1 + n2
   var s = window.alert('A soma dos 2 números é ' + s)

   //existem 2 tipos de números: inteiros (Number.parsInt)
   //float são números flutuantes, vem depois da vírgula
   //testar com números flutuantes
   var n1 = Number.parseFloat(window.prompt('Digite um número'))
   var n2 = Number.parseFloat(window.prompt('Digite outro número'))
   var s = n1 + n2
   var s = window.alert('A soma dos 2 números é ' + s)

   //números inteiros

   var n1 = Number.parseInt(window.prompt('Digite um número inteiro'))
   var n2 = Number.parseInt(window.prompt('Digite outro número inteiro'))
   var n2 = n1 + n2
   var s = window.alert('A soma dos 2 números é' + s)

   //JavaScript decide se é inteiro ou Flutuante
   var n1 = Number(window.prompt('Digite um número ')) 
   var n2 = Number(window.prompt('Digite outro número'))
   var s = n1 + n2
   var s = window.alert('A soma dos 2 números é ' + s)