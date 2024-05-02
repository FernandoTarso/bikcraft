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
