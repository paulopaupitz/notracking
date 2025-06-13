import { saveClient } from "./form.js";
import { updateTable, editDeleteView } from "./table.js";
import { saveEdit, closeModal } from "./modal.js";
import { printDiv } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
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
  if(btnImprimir){
    btnImprimir.addEventListener("click", printDiv);
  }
});
