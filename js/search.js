document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("txtBusca");

  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const busca = this.value.toLowerCase().trim();

      const linhas = document.querySelectorAll("#dados-tabela tr");

      linhas.forEach((linha, index) => {
        const texto = linha.textContent.toLowerCase();

        if (texto.includes(busca)) {
          linha.style.display = "";
        } else {
          linha.style.display = "none";
        }
      });
    });
  } else {
    console.error("Elemento de busca não encontrado!");
  }
});
