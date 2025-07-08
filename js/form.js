import { createClient, readClient } from "./storage.js";
import { highlightInvalidField, clearError } from "./utils.js";
import { showSnackbar } from "../UI/snackbar.js";

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

export function saveClient() {
  clearError();

  const requiredFields = [
    { id: "txtNome", message: "O campo 'Nome' é obrigatório." },
    { id: "txtSobrenome", message: "O campo 'Sobrenome' é obrigatório." },
    { id: "dataNascimento", message: "A data é obrigatória" },
    { id: "txtEmail", message: "O campo 'E-mail' é obrigatório." },
  ];

  let hasErrors = false;
  requiredFields.forEach((fieldInfo) => {
    const element = document.getElementById(fieldInfo.id);
    if (!element.value.trim()) {
      highlightInvalidField(fieldInfo.id, fieldInfo.message);
      hasErrors = true;
    }
  });

  if (hasErrors) {
    showSnackbar("Por favor, preencha todos os campos destacados.", "warning");
    return;
  }

  const email = document.getElementById("txtEmail").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showSnackbar("Insira um e-mail válido.", "warning");
    highlightInvalidField("txtEmail", "Insira um e-mail válido.");
    return;
  }

  const dbClient = readClient();
  const emailExiste = dbClient.some(
    (c) => c.email.toLowerCase() === email.toLowerCase()
  );
  if (emailExiste) {
    showSnackbar("O E-mail informado já está em uso", "warning");
    highlightInvalidField("txtEmail", "O e-mail informado já está em uso");
    return;
  }

  const client = {
    nome: document.getElementById("txtNome").value.trim(),
    sobrenome: document.getElementById("txtSobrenome").value.trim(),
    dtNasc: document.getElementById("dataNascimento").value,
    status: document.getElementById("status").checked ? "Ativo" : "Inativo",
    email: email,
    endereco: document.getElementById("txtEndereco").value,
    outrasInfos: document.getElementById("txtInfo").value,
    interesses: document.getElementById("txtInteresse").value,
    sentimentos: document.getElementById("txtSentimentos").value,
    valores: document.getElementById("txtValores").value,
  };

  createClient(client);
  showSnackbar("Cliente cadastrado com sucesso!", "success");
  setTimeout(() => {
    clearFields();
  }, 1500);
  console.log("Cadastrando Cliente");
}
