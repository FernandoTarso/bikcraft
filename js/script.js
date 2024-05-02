document.querySelectorAll("header nav a").forEach((link) => {
  if (location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
});
