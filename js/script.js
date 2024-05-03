// Ativar links do menu navegação primária
document.querySelectorAll("header nav a").forEach((link) => {
  if (location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
});

// Ativar itens do orçamento
// const parametros = new URLSearchParams(location.search);

new URLSearchParams(location.search).forEach((parametro) => {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(parametro);
});

// Lista faq expansíva com botão
const botoes = document.querySelectorAll("#faq button");

function expandirResposta(evento) {
  const pergunta = evento.currentTarget;
  const resposta = document.getElementById(
    pergunta.getAttribute("aria-controls")
  );

  resposta.classList.toggle("il-blc");
  const expanded = resposta.classList.contains("il-blc");
  pergunta.setAttribute("aria-expanded", expanded);
}

function eventoResposta(resposta) {
  resposta.addEventListener("click", expandirResposta);
}
botoes.forEach(eventoResposta);
