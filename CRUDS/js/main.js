import { saveClient, saveAdmin } from "./form.js";
import { updateTable, editDeleteView } from "./table.js";
import { saveEdit, closeModal } from "./modal.js";
import { printDiv, toggleDarkMode, loadTheme, loginAdmin } from "./utils.js";



document.addEventListener("DOMContentLoaded", () => {
  loadTheme();

  const form = document.querySelector(".form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  const enterButton = document.getElementById("enterButton");
  if (enterButton) {
    enterButton.addEventListener("click", (e) => {
      e.preventDefault();
      autenticarAdmin();
    });
  }

  const cadastroButton = document.getElementById("buttonCadastrar");
  if (cadastroButton) {
    cadastroButton.addEventListener("click", saveClient);
  }

  const tabela = document.querySelector("#dados-tabela");
  if (tabela) {
    updateTable();
    tabela.addEventListener("click", editDeleteView);
  }

  const btnSalvarEdicao = document.getElementById("btnSalvarEdicao");
  if (btnSalvarEdicao) {
    btnSalvarEdicao.addEventListener("click", saveEdit);
  }

  const btnFecharModal = document.getElementById("btnFecharModal");
  if (btnFecharModal) {
    btnFecharModal.addEventListener("click", closeModal);
  }

  const btnImprimir = document.getElementById("btnImprimir");
  if (btnImprimir) {
    btnImprimir.addEventListener("click", printDiv);
  }

  const btnCadAdmin = document.getElementById("btnCadAdmin");
  if (btnCadAdmin) {
    btnCadAdmin.addEventListener("click", saveAdmin);
  }

  const btnVoltar = document.getElementById("btnVoltar");
  if (btnVoltar) {
    btnVoltar.addEventListener("click", () => window.location.href = "/CRUDS/pages/index.html");
  }

  const interruptor = document.getElementById("interruptor");
  if (interruptor) {
    interruptor.addEventListener("click", toggleDarkMode);
  }

});
