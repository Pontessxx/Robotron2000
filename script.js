//console.log para informar os erros
//o querySelector tenho que passar se é #id ou .class
const robotron = document.getElementById('robotron')
//adiciona o evento para o elemento
robotron.addEventListener('click',()=>{
    console.log("Olá")
    console.log('Bem vindo ao robotron 2000')
});
// função anonima , economizamos na escrita usando 'arrows function'
//parentezes vem dentro dos parentezes
//usasse crase para poder acessar o valor da vaiavel no js

function dizOi(nome){
    console.log(`Olá, ${nome}`)
}
dizOi("pontes")

//soma 'str' +1 => '00111'
/* const subtrair = document.querySelector('#subtrair'),
     somar = document.querySelector('#somar'),
     braco = document.querySelector('#braco'), */
const controle = document.querySelectorAll('[data-controle]')
const estatistica = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "braco": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
//console.log(estatistica)
controle.forEach((elemento)=>{
    elemento.addEventListener('click',(evento)=>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector('[data-contador]')
    if(operacao === '-'){
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
};
function atualizaEstatistica(peca){
    //console.log(pecas[peca])
    estatistica.forEach((elemento)=>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}