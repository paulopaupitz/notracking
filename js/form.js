import {
  createClient,
  createAdmin,
  readClient,
  getLocalStorageAdmin,
} from "./storage.js";
// import { updateTable } from "./table.js"; pensar nisso depois

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

    const dbClient = readClient();
    const emailExiste = dbClient.some(
      (c) => c.email.toLowerCase() === client.email.toLowerCase()
    );
    if (emailExiste) {
      alert("Erro: O e-mail informado já está em uso!");
      return;
    }
    createClient(client);
    alert("Cliente cadastrado com sucesso!");
    // updateTable();
    clearFields();
    console.log("Cadastrando Cliente");
  }
}

export function saveAdmin() {
  if (isValidFieldsAdmin()) {
    const emailAdmin = document.getElementById("txtEmailAdmin").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAdmin)) {
      alert("Por favor, insira um email válido!");
      return;
    }

    const dbAdmin = getLocalStorageAdmin();
    const emailExiste = dbAdmin.some(
      (a) => a.email.toLowerCase() === emailAdmin.toLowerCase()
    );
    if (emailExiste) {
      alert("Erro: O e-mail do administrador já está em uso!");
      return;
    }

    const admin = {
      nome: document.getElementById("txtNomeAdmin").value,
      email: emailAdmin,
      senha: document.getElementById("txtPWDAdmin").value,
    };
    createAdmin(admin);
    alert("Administrador cadastrado com sucesso!");
    clearFieldsAdmin();
    window.location.href = "../index.html";
  }
}
