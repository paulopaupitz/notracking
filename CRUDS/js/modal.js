import { updateClient } from "./storage.js";
import { updateTable } from "./table.js";

export function openModal() {
  document.getElementById("modal").classList.add("active");
}

export function closeModal() {
  document.getElementById("modal").classList.remove("active");
}

export function fillModal(client) {
  document.getElementById("modal-txtNome").value = client.nome;
  document.getElementById("modal-txtSobrenome").value = client.sobrenome;
  document.getElementById("modal-dataNascimento").value = client.dtNasc;
  document.getElementById("modal-status").checked = client.status === "Ativo";
  document.getElementById("modal-txtEmail").value = client.email;
  document.getElementById("modal-txtEndereco").value = client.endereco;
  document.getElementById("modal-txtInfo").value = client.outrasInfos;
  document.getElementById("modal-txtInteresse").value = client.interesses;
  document.getElementById("modal-txtSentimentos").value = client.sentimentos;
  document.getElementById("modal-txtValores").value = client.valores;
}

export function isValidModalFields() {
  return document.getElementById("modal-form").reportValidity();
}

export function saveEdit() {
  if (!isValidModalFields()) return;

  const index = document.getElementById("modal-form").dataset.index;
  const client = {
    nome: document.getElementById("modal-txtNome").value,
    sobrenome: document.getElementById("modal-txtSobrenome").value,
    dtNasc: document.getElementById("modal-dataNascimento").value,
    status: document.getElementById("modal-status").checked ? "Ativo" : "Inativo",
    email: document.getElementById("modal-txtEmail").value,
    endereco: document.getElementById("modal-txtEndereco").value,
    outrasInfos: document.getElementById("modal-txtInfo").value,
    interesses: document.getElementById("modal-txtInteresse").value,
    sentimentos: document.getElementById("modal-txtSentimentos").value,
    valores: document.getElementById("modal-txtValores").value,
  };

  updateClient(index, client);
  updateTable();
  closeModal();
}
