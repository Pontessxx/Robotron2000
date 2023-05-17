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
const subtrair = document.getElementById('subtrair'),
     somar = document.getElementById('somar'),
     braco = document.getElementById('braco')

somar.addEventListener('click', ()=>{manipulaDados('somar')});
subtrair.addEventListener('click', ()=>{manipulaDados('subtrair')});

function manipulaDados(operacao){
    if(operacao === 'subtrair'){
        braco.value = parseInt(braco.value) - 1;
    }else{
        braco.value = parseInt(braco.value) + 1;
    }
};