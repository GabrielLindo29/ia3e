const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Você dorme pelo menos 8 horas por noite?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Eu durmo pelo menos 8 horas por noite"}, 

            {texto: "Não",
            afirmação:"Eu não durmo 8 horas por noite"}]
    },
    { 
        enunciado: "Vocẽ está satisfeito com a qualidade do seu sono?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Me sintoótimo com a qualidade do meu sono"}, 
                
            {texto: "Não",
            afirmação:"Eu me sinto péssimo durante o dia, meu sono não tem qualidade nenhuma"}]
    },
    { 
        enunciado: "Vocẽ gostaria de uma solução para concertar seu sono?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim, eu preciso de ajuda"}, 
                
            {texto: "Não",
            afirmação:"Não, ja estou satisfeito do jeito que tá"}]
    },
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();
