// ==========================================
// 1. CONTADOR DE ATITUDES SUSTENTÁVEIS
// ==========================================
let pontosSustentaveis = 0;

function registrarAtitude() {
    pontosSustentaveis += 10;
    
    // Atualiza o texto na tela
    const painelPontos = document.getElementById("pontos-txt");
    if (painelPontos) {
        painelPontos.innerText = `Você acumulou ${pontosSustentaveis} pontos de sementes!🌱`;
    }
    
    // Mensagem de incentivo
    alert("Parabéns! Cada pequena ação ajuda a proteger o nosso planeta. 🌍");
}

// ==========================================
// 2. MINI-QUIZ DO AGRINHO
// ==========================================
function verificarResposta(respostaCorreta) {
    const feedback = document.getElementById("feedback-quiz");
    
    if (respostaCorreta) {
        feedback.innerText = "Correto! 🎉 A agricultura sustentável preserva o solo e a água para o futuro.";
        feedback.style.color = "#2e7d32"; // Verde escuro
    } else {
        feedback.innerText = "Ops, tente novamente! 🍂 Lembre-se de que queimar a floresta ou desperdiçar água prejudica a natureza.";
        feedback.style.color = "#c62828"; // Vermelho
    }
}

// ==========================================
// 3. ALTERADOR DE TEMA (MODO NATUREZA / MODO ESCURO)
// ==========================================
function alternarTema() {
    const body = document.body;
    body.classList.toggle("modo-escuro");
    
    const botao = document.getElementById("btn-tema");
    if (body.classList.contains("modo-escuro")) {
        botao.innerText = "☀️ Modo Dia";
    } else {
        botao.innerText = "🌙 Modo Noite";
    }
}
