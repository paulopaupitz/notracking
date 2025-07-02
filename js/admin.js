import { getLocalStorageAdmin, setLocalStorageAdmin } from "./storage.js";
import { showSnackbar } from "../UI/snackbar.js";
import { highlightInvalidField,showError, clearError } from "./utils.js";

export function handleCadastroAdmin() {
  const nome = document.getElementById("txtNomeAdmin")?.value.trim() || "";
  const email = document.getElementById("txtEmailAdmin")?.value.trim() || "";
  const senha = document.getElementById("pwdAdmin")?.value.trim() || "";
  const confirmacaoSenha =
    document.getElementById("confirmPwdAdmin")?.value.trim() || "";
  return cadastrarNovoAdmin(nome, email, senha, confirmacaoSenha);
}





// Função para cadastrar novo administrador
export function cadastrarNovoAdmin(nome, email, senha, confirmacaoSenha) {
  if (!nome || !email || !senha || !confirmacaoSenha) {
    if (!nome) highlightInvalidField("txtNomeAdmin");
    if (!email) highlightInvalidField("txtEmailAdmin");
    if (!senha) highlightInvalidField("pwdAdmin");
    if (!confirmacaoSenha) highlightInvalidField("confirmPwdAdmin");
    showSnackbar("Por favor, preencha todos os campos", "error");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showSnackbar("Insira um e-mail válido", "warning");
    highlightInvalidField("txtEmailAdmin");
    showError("email-error", "Você precisa inserir um email válido!");
    return false;
  }

  if (senha.length < 6) {
    showSnackbar("A senha deve ter no mínimo 6 caracteres", "warning");
    showError("password-error", "A senha precisa ter no minimo 6 caracteres");
    highlightInvalidField("pwdAdmin");
    return false;
  }
  if (senha !== confirmacaoSenha) {
    showSnackbar("As senhas não batem!", "error");
    highlightInvalidField("confirmPwdAdmin");
    showError("password-error", "As senhas precisam ser a mesma");
    return false;
  }
  const dbAdmin = getLocalStorageAdmin();

  // Verifica se admin já existe
  const adminExistente = dbAdmin.find(
    (a) => a.email.toLowerCase() === email.toLowerCase()
  );

  if (adminExistente) {
    showSnackbar("Este e-mail já está cadastrado!", "warning");
    highlightInvalidField("txtEmailAdmin");
    return false;
  }

  // Adiciona novo admin
  const novoAdmin = {
    id: Date.now().toString(),
    nome,
    email,
    senha,
  };

  dbAdmin.push(novoAdmin);
  setLocalStorageAdmin(dbAdmin);
  showSnackbar("Administrador cadastrado com sucesso!", "success");

  document.getElementById("txtNomeAdmin").value = "";
  document.getElementById("txtEmailAdmin").value = "";
  document.getElementById("pwdAdmin").value = "";
  document.getElementById("confirmPwdAdmin").value = "";

  return true;
}

export function autenticarAdmin() {
  const email = document.getElementById("txtEmail")?.value.trim() || "";
  const senha = document.getElementById("pwd")?.value.trim() || "";

  // Validações
  if (!email) {
    showSnackbar("O campo de e-mail é obrigatório.", "warning");
    highlightInvalidField("txtEmail");
    return false;
  } else if (!senha) {
    showSnackbar("O campo de senha é obrigatório.", "warning");
    highlightInvalidField("pwd");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    highlightInvalidField("txtEmail");
    showSnackbar("Insira um e-mail válido", "warning");
    return false;
  }

  // Busca admin no localStorage
  const dbAdmin = getLocalStorageAdmin();

  const admin = dbAdmin.find(
    (a) => a.email.toLowerCase() === email.toLowerCase() && a.senha === senha
  );

  if (admin) {
    showSnackbar("Login realizado!", "success");

    document.getElementById("txtEmail").value = "";
    document.getElementById("pwd").value = "";

    setTimeout(() => {
      window.location.href = "pages/dashboard.html";
    }, 1500);
    return true;
  } else {
    showSnackbar("E-mail ou senha incorretos!", "error");
    return false;
  }
}
