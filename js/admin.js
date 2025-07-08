import { getLocalStorageAdmin, setLocalStorageAdmin } from "./storage.js";
import { showSnackbar } from "../UI/snackbar.js";
import { highlightInvalidField, clearError } from "./utils.js";

export function handleCadastroAdmin() {
  // Limpar erros anteriores
  clearError();

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
    if (!nome) highlightInvalidField("txtNomeAdmin", "O nome é obrigatório!");
    if (!email)
      highlightInvalidField("txtEmailAdmin", "O e-mail é obrigatório!");
    if (!senha) highlightInvalidField("pwdAdmin", "A senha é obrigatória!");
    if (!confirmacaoSenha)
      highlightInvalidField(
        "confirmPwdAdmin",
        "A confirmação de senha é obrigatória!"
      );
    // showSnackbar("Por favor, preencha todos os campos", "error");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    // showSnackbar("Insira um e-mail válido", "warning");
    highlightInvalidField(
      "txtEmailAdmin",
      "Você precisa inserir um email válido!"
    );
    return false;
  }

  if (senha.length < 6) {
    // showSnackbar("A senha deve ter no mínimo 6 caracteres", "warning");
    highlightInvalidField(
      "pwdAdmin",
      "A senha precisa ter no mínimo 6 caracteres"
    );
    return false;
  }
  if (senha !== confirmacaoSenha) {
    // showSnackbar("As senhas não batem!", "error");
    highlightInvalidField("confirmPwdAdmin", "As senhas precisam ser iguais");
    return false;
  }
  const dbAdmin = getLocalStorageAdmin();

  // Verifica se admin já existe
  const adminExistente = dbAdmin.find(
    (a) => a.email.toLowerCase() === email.toLowerCase()
  );

  if (adminExistente) {
    // showSnackbar("Este e-mail já está cadastrado!", "warning");
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

  // Limpar erros anteriores
  clearError();

  // Validações
  if (!email) {
    // showSnackbar("O campo de e-mail é obrigatório.", "warning");
    highlightInvalidField("txtEmail", "O campo de e-mail é obrigatório.");
    return false;
  } else if (!senha) {
    // showSnackbar("O campo de senha é obrigatório.", "warning");
    highlightInvalidField("pwd", "O campo de senha é obrigatório.");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    highlightInvalidField("txtEmail", "Insira um e-mail válido.");
    // showSnackbar("Insira um e-mail válido", "warning");
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
    // showSnackbar("E-mail ou senha incorretos!", "error");
    highlightInvalidField("txtEmail", "E-mail ou senha incorretos!");
    highlightInvalidField("pwd", "E-mail ou senha incorretos!");
    return false;
  }
}
