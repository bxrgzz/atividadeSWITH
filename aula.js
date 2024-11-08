
////////////////////SWITH CASE
// ex 1


//ex 2
let operacao = 'multiplicação'
let num1 = 34
let num2 = 23

switch (operacao) {
    case 'multiplicação':
        console.log(num1 * num2);
        break;
}

//ex 3
const eu2 = {
    nome: 'Isabella',
    fxetaria: 'adulto',

}

let infantil = 'Bem Vindo, criança birrenta'
let adolescente = 'Bem Vindo, adolescente com espinha'
let adulto = 'Bem Vindo, adulto CLT'
let Idoso = 'Bem Vindo, véío safado'


switch (eu2.fxetaria) {
    case 'infantil':
        console.log(infantil);
        break;
    case 'adolescente':
        console.log(adolescente);
        break;
    case 'adulto':
        console.log(adulto);
        break;
    case 'Idoso':
        console.log(Idoso);
        break;
    default:
        console.log('Não encontramos sua faixa etária');
        break;
}

//ex 4
let nota = 7

switch (nota) {
    case (nota = 0 && nota <= 4):
        console.log('Nota insuficiente');
        break;
    case (nota = 5 && nota <= 7):
        console.log('Nota Regular')
        break;
    case (nota = 8 && nota <= 10):
        console.log('Excelente')
        break;
}

//ex 5
let dia = 5

switch (dia) {
    case (dia = 1):
        console.log(`segunda`)
        break;
    case (dia = 2):
        console.log(`terça`)
        break;
    case (dia = 3):
        console.log(`quarta`)
        break;
    case (dia = 4):
        console.log(`quinta`)
        break;
    case (dia = 5):
        console.log(`sexta`)
        break;
    case (dia = 6):
        console.log(`sabado`)
        break;
    case (dia = 7):
        console.log(`domingo`)
        break;
}

//ex 6
let nos = {
    eventodehoje: 'feira de coiso'
}


switch (nos.eventodehoje) {
    case (evento = 'Halloween'):
        console.log('Festa de fantasmas')
        break;
    case (evento2 = 'Festa Junina'):
        console.log('Dia de subir no touro')
        break;
    default:
        console.log('não existe esse evento no momento')
}

//ex 7
let mes = 5

switch (mes) {

    case (mes = 1):
        console.log(`janeiro`)
        break;
    case (mes = 2):
        console.log(`fevereiro`)
        break;
    case (mes = 3):
        console.log(`março`)
        break;
    case (mes = 4):
        console.log(`abril`)
        break;
    case (mes = 5):
        console.log(`maio`)
        break;
    case (mes = 6):
        console.log(`junho`)
        break;
    case (mes = 7):
        console.log(`julho`)
        break;
    case (mes = 8):
        console.log(`agosto`)
        break;
    case (mes = 9):
        console.log(`setembro`)
        break;
    case (mes = 10):
        console.log(`outubro`)
        break;
    case (mes = 11):
        console.log(`novembro`)
        break;
    case (mes = 12):
        console.log(`dezembro`)
        break;
}

//ex 8
let estacao = 4

switch (estacao) {
    case (estacao = 1):
        console.log(`Inverno`)
        break;
    case (estacao = 2):
        console.log(`Primavera`)
        break;
    case (estacao = 3):
        console.log(`Verão`)
        break;
    case (estacao = 4):
        console.log(`Outono`)
        break;
}


//ex 9
let medida = 100
let unidade = 5

switch (medida) {
    case (100):
        console.log(`${medida * unidade}`);
        break;
    case (1000):
        console.log(`${medida * unidade}`);
        break
    case (0.100):
        console.log(`${medida * unidade}`);
}


//ex 10
let nota1 = 3

switch (nota1) {
    case (nota1 >= 9):
        console.log('A')
        break;
    case (nota1 = 8):
        console.log('B')
        break;
    case (nota1 = 7):
        console.log('C')
        break;
    case (nota1 = 6):
        console.log('D')
        break;
    default: (nota1 = 5)
        console.log('F')
}


//ex 11
function moeda(valor, unidade) {
    switch (unidade) {
        case 'USD':
            console.log(`${valor} em USD é  igual a ${valor / 5.71}`)
            break;
        case 'EUR':
            console.log(`${valor} em EUR é ${valor * 6.12}`)
            break
        case 'GBP':
            console.log(`${valor} em GBP é ${valor / 7.97}`)
            break;
        default:
            console.log('Unidade não encontrada')
    }
}

console.log(moeda(1000, 'USD'))


//ex 12
let e = {
    curso: 'Técnico'
}

switch (e.curso) {
    case 'Técnico':
        console.log('o curso técnico é voltado para a capacitação de profissionais para o mercado de trabalho')
        break;
    case 'Superior':
        console.log('o curso superior possui o objetivo de ajudar na captação de conhecimentos e habilidades, passando a dominar uma área de sua escolha')
        break;
    case 'Extensão':
        console.log('o curso extensivo visa estender os conhecimentos e recursos produzidos dentro das universidades para além de seus muros')
        break;
}


//ex 13

let prioridade = 3

switch (prioridade) {
    case 1:
        console.log('Baixa');
        break;
    case 2:
        console.log('Média');
        break;
    case 3:
        console.log('Alta');
        break;
    default:
        console.log('Prioridade inválidade');
}

//ex 14
let peso = 63;
let altura = 1.70;

let imc = peso / (altura * altura);

switch (true) {
    case imc < 10:
        console.log('Você está com o peso muito baixo')
        break;
    case imc < 20:
        console.log('Você está com o peso baixo')
        break;
    case imc < 25:
        console.log('Você está com o peso normal')
        break;
    case imc > 30:
        console.log('Você está com o peso acima do normal')
        break;
    case imc > 40:
        console.log('Você está com o peso obeso')
        break;
}

//ex 15
let RgE = 11;
let mensagem1 = "Numero do  RG Tem 9 digitos";
let mensagem2 = "Numero do  CPF Tem 11  digitos";
let mensagem3 = "Numero do  Passaporte Tem 6  digitos";

switch(true) {
    case (RgE = 9): 
        console.log(mensagem1);
        break;
    case (RgE = 9): 
        console.log(mensagem2);
        break;
        case  (RgE = 6): 
        console.log(mensagem3);
        break;
        default:
        console.log("Documento invalido");
        break;
}


//ex 16
let passagem = 2.20;

switch(passagem){
    case (passagem =2.20):
    console.log("Estudante");
break;
    case (passagem = 4.40):
    console.log("Trabalhador");
break;
    case (passagem = 0):
    console.log("Idoso");
break;
    default:
    console.log("Bilhete invalido");
break;
}


//ex 17
let segundos = 30;

switch(true){
   case (segundos >=50 && segundos <= 59):
   console.log("Muito lento");
break;
   case (segundos > 30 && segundos < 50):
   console.log("Lento");
break;
    case (segundos >20 && segundos  < 30):
    console.log("Moderado");
break; 
    case (segundos  > 10 && segundos < 20):
    console.log("Rápido");
break;
    default:
    console.log("Velocidade não encontrada");
break;
}


//ex 18
let deficiencia = "Motora";

switch(deficiencia){
    case (deficiencia = "Visual"):
    console.log("Cão Guia, Bengala");
break;
    case (deficiencia = "Auditiva"):
    console.log("Libras");
break;
    case (deficiencia = "Motora"):
    console.log("Acompanhamento particular ")
}


//ex 19
let usuario = 90;

switch(true){
    case (usuario >=100):
    console.log("A");
break;
    case  (usuario >=80 && usuario <= 90):
    console.log("B");
break;
    case (usuario >=70 && usuario < 80):
    console.log("C");
break;
    case (usuario >=60 && usuario < 70):
    console.log("D");
break;
    case (usuario >= 0 && usuario < 60):
    console.log("F");
break;
    default:
    console.log("Nota invalida");
break;
}


//ex 20
let clima = "Nublado";

switch(clima){
    case (clima = "Sol"):
    console.log("Muito calor, use protetor solar");
break;
    case (clima ="Nublado"):
    console.log("tempo meio bosta");
break;
    case  (clima = "Chuva"):
    console.log("vixi se ferro");
break;
    default:
    console.log("Clima invalido");
break;
}