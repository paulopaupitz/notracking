import { createClient } from "./storage.js";
import { updateTable } from "./table.js";
import { createAdmin } from "./storage.js";


export function isValidFields() {
  return document.getElementById("form-register").reportValidity();
}
export function isValidFieldsAdmin() {
  return document.getElementById("form-register-adm").reportValidity();
}

export function clearFields() {
  document.getElementById("txtNome").value = "";
  document.getElementById("txtSobrenome").value = "";
  document.getElementById("dataNascimento").value = "";
  document.getElementById("status").checked = false;
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtEndereco").value = "";
  document.getElementById("txtInfo").value = "";
  document.getElementById("txtInteresse").value = "";
  document.getElementById("txtSentimentos").value = "";
  document.getElementById("txtValores").value = "";
}

export function clearFieldsAdmin() {
  document.getElementById("txtNomeAdmin").value = "";
  document.getElementById("txtEmailAdmin").value = "";
  document.getElementById("txtPWDAdmin").value = "";
}

export function saveClient() {
  if (isValidFields()) {
    const client = {
      nome: document.getElementById("txtNome").value,
      sobrenome: document.getElementById("txtSobrenome").value,
      dtNasc: document.getElementById("dataNascimento").value,
      status: document.getElementById("status").checked ? "Ativo" : "Inativo",
      email: document.getElementById("txtEmail").value,
      endereco: document.getElementById("txtEndereco").value,
      outrasInfos: document.getElementById("txtInfo").value,
      interesses: document.getElementById("txtInteresse").value,
      sentimentos: document.getElementById("txtSentimentos").value,
      valores: document.getElementById("txtValores").value,
    };
    createClient(client);
    alert("Cliente cadastrado com sucesso!");
    updateTable();
    clearFields();
    console.log("Cadastrando Cliente");
  }
}

export function saveAdmin() {
  if (isValidFieldsAdmin()) {
    const admin = {
      nome: document.getElementById("txtNomeAdmin").value,
      email: document.getElementById("txtEmailAdmin").value,
      senha: document.getElementById("txtPWDAdmin").value,
    };
    createAdmin(admin);
    alert("Administrador cadastrado com sucesso!");
    clearFieldsAdmin();
    window.location.href = "/CRUDS/pages/login.html";
    console.log("Cadastrando Administrador");
  }
}

