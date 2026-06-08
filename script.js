function mostrarMensagem() {

    let mensagens = [
        "🌱 A agricultura é essencial para a vida.",
        "🌎 Preserve o meio ambiente para um futuro melhor.",
        "🚜 O campo e a cidade dependem um do outro.",
        "💧 Economizar água é um ato de cidadania.",
        "🌻 Sustentabilidade é cuidar do presente e do futuro."
    ];

    let sorteio = Math.floor(Math.random() * mensagens.length);

    document.getElementById("mensagem").innerHTML =
        mensagens[sorteio];
}
