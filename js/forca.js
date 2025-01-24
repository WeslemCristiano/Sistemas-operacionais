let jogarNovamente = true;
let tentativas = 6;
let acertos = 0;
let derrotas = 0;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let palavras = [];
let jogoAutomatico = true;
//1 minutos
let timeLeft = 60;
let timerInterval;


// Lista de palavras relacionadas a Sistemas Operacionais
function carregaListaAutomatica() {
    palavras = [
        { nome: "PROCESSOS", categoria: "Gerenciamento: Unidade básica de execução em um sistema operacional." },
        { nome: "DEADLOCK", categoria: "Problemas: Situação em que processos ficam esperando indefinidamente por recursos." },
        { nome: "INTERRUPCAO", categoria: "Execução: Sinal que altera o fluxo normal de execução de um programa." },
        { nome: "ESCALONAMENTO", categoria: "Gerenciamento: Método de alocação de CPU para processos." },
        { nome: "MEMORIA", categoria: "Alocação: Área onde os dados e instruções são armazenados." },
        { nome: "SISTEMA", categoria: "Conceitos Gerais: Conjunto de componentes que trabalham em conjunto." },
        { nome: "RECURSOS", categoria: "Alocação: Elementos necessários para execução de processos." },
        { nome: "SEMAFOROS", categoria: "Sincronização: Mecanismo usado para evitar condições de corrida." },
        { nome: "BUFFER", categoria: "Sincronização: Área temporária de armazenamento de dados." },
        { nome: "VIRTUALIZACAO", categoria: "Memória: Técnica que simula recursos físicos para maior eficiência." },
        { nome: "ARQUIVOS", categoria: "Memória: Conjunto de dados armazenados em um dispositivo." },
        { nome: "THREADS", categoria: "Execução: Processos leves que compartilham recursos de um processo." },
        { nome: "PAGINACAO", categoria: "Memória: Técnica de gerenciamento de memória que divide a memória em páginas." },
        { nome: "SWAPPING", categoria: "Memória: Técnica de transferência de páginas entre memória principal e secundária." },
        { nome: "PARTICIONAMENTO", categoria: "Memória: Divisão da memória em áreas de alocação de processos." },
        { nome: "ALGORITMOS", categoria: "Escalonamento: Conjunto de regras para alocação de recursos." },
        { nome: "FIFO", categoria: "Escalonamento: Algoritmo de escalonamento do tipo First In First Out." },
        { nome: "ROUND-ROBIN", categoria: "Escalonamento: Algoritmo de escalonamento do tipo circular." },
        { nome: "PRIORIDADE", categoria: "Escalonamento: Algoritmo de escalonamento baseado em níveis de prioridade." },
        { nome: "PREEMPTIVO", categoria: "Escalonamento: Algoritmo de escalonamento que permite interrupções." },
        { nome: "NAO-PREEMPTIVO", categoria: "Escalonamento: Algoritmo de escalonamento que não permite interrupções." },
        { nome: "QUANTUM", categoria: "Escalonamento: Intervalo de tempo em que um processo é executado." }
    ];
}



carregaListaAutomatica();

criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    // console.log(palavraSecretaSorteada);
}

montarPalavraNaTela();
function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>";
            } else {
                listaDinamica[i] = "&nbsp;";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
            }
        } else {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>";
            } else {
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
            }
        }
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }
}

function startTimer() {
    const timerDisplay = document.getElementById('timer');
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            // esprerar 5 segundos e recarregar a página
            setTimeout(() => {
                location.reload();
            }, 5000);
            gameOver("🚀 Tempo esgotado! Você perdeu.");
            registrarDerrota();
        } else {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `Tempo restante: ${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

function gameOver(message) {
    document.getElementById('modalBody').textContent = message;
    $('#myModal').modal('show');
    document.querySelectorAll('.teclas button').forEach(button => {
        button.disabled = true;
    });
}

document.getElementById('btnReiniciar').addEventListener('click', () => {
    clearInterval(timerInterval);
    timeLeft = 300;
    startTimer();

});


startTimer();

// Função para atualizar o placar
function atualizarPlacar() {
    document.getElementById("score-acertos").textContent = `Acertos: ${acertos}`;
    document.getElementById("score-derrotas").textContent = `Derrotas: ${derrotas}`;

    // salvar o placar no localStorage
    localStorage.setItem("acertos", acertos);
    localStorage.setItem("derrotas", derrotas);

}

// Função para carregar o placar do localStorage
function carregarPlacar() {
     
    acertos = localStorage.getItem("acertos") || 0;
    derrotas = localStorage.getItem("derrotas") || 0;

   
    atualizarPlacar();
}

// Função para resetar o placar
function resetarPlacar() {
    acertos = 0;
    derrotas = 0;
    atualizarPlacar();
}
    

function registrarAcerto() {
    acertos++;
    atualizarPlacar();
}

function registrarDerrota() {
    derrotas++;
    atualizarPlacar();
}


function mudarStyleLetra(tecla, condicao) {
    if (condicao == false) {
        document.getElementById(tecla).style.background = "#C71585";
        document.getElementById(tecla).style.color = "#ffffff";
    } else {
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }
}

function comparalistas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra);
    if (pos < 0) {
        tentativas--;
        carregaImagemForca();

        if (tentativas == 0) {
            abreModal("💀", "Não foi dessa vez, você precisa estudar mais sistemas operacionais!!! <br> <br> A palavra secreta era: " + palavraSecretaSorteada);
            setTimeout(() => {
                location.reload();
            }, 5000);

            // quando o jogador perde, registrar a derrota
            registrarDerrota();
        }
    } else {
        mudarStyleLetra("tecla-" + letra, true);
        for (let i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal("🫡 PARABÉNS!", "Você venceu...");
        tentativas = 0;
        setTimeout(() => {
            location.reload();
        }, 5000);

        // quando o jogador vence, registrar o acerto
        registrarAcerto();
    }
}

async function atraso(tempo) {
    return new Promise((x) => setTimeout(x, tempo));
}

function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar");
bntReiniciar.addEventListener("click", function () {
    jogarNovamente = false;
    resetarPlacar();
    location.reload();
});

// Exibir placar ao carregar a página

carregarPlacar();


