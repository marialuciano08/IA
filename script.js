const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a sua primeoira reação ao ouvir sobre inteligência artificial?",
        alternativas: [
            {
                texto: "Curiosidade e entusiasmo sobre o que ela pode fazer.",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Cautela e preocupação com os impactos futuros.",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Imagine que a IA está sendo usada para analisar dados de saúde e sugerir tratamentos. Você confiaria mais em um diagnóstico feito por um médico ou por uma IA?",
        alternativas: [
            {
                texto: "No diagnóstico da IA, pois é baseado em uma vasta quantidade de dados e lógica.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "No diagnóstico do médico, pois a intuição e a experiência humana são insubstituíveis.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "A IA começa a automatizar tarefas que antes eram feitas por humanos, como atendimentos ao clientes e programação. Como você vê o futuro do trabalho?",
        alternativas: [
            {
                texto: "Preocupa-me que muitos empregos sejam perdidos para a automação.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Acredito que novos empregos, mais criativos e estratégicos, surgiram.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Um sistema de IA de segurança pública é implementada na sua cidade. Ele prevê crimes analisando padrões de comportamento. Você acredita que isso é uma boa ideia?",
        alternativas: [
            {
                texto: "Sim, se a IA puder reduzir a criminalidade, o benefício é maior que o risco.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Não, isso pode levar a vigilância excessiva e violar a privacidade das pessoas.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Ao final de sua jornada, você entende que a IA é uma força transformadora. O que você faria com esse conhecimento?",
        alternativas: [
            {
                texto: "Integraria a IA em sua vida e trabalho, usando-a para criar e inovar de forma constante",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Aprenderia sobre a IA, mas sempre priorizando o desenvolivimento das habilidades humanas, como a criatividade e o pensamentos crítico",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
