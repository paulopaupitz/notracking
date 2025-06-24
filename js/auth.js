import { getLocalStorageAdmin } from "./storage.js";

function validarCampos() {
  try {
    const email = document.getElementById("txtEmail").value;
    const senha = document.getElementById("pwd").value;
    if (!email || !senha) {
      alert("Por favor, preencha todos os campos");
      return null;
    }
    return { email, senha };
  } catch (error) {
    console.log(error);
  }
}

export function autenticarAdmin() {
  const dados = validarCampos();

  if (!dados) {
    return false;
  }

  const { email, senha } = dados;

  // Obtém os administradores cadastrados do localStorage
  const adminsCadastrados = getLocalStorageAdmin();

  // Busca o administrador pelo email
  const admin = adminsCadastrados.find(
    (a) => a.email.toLowerCase() === email.toLowerCase()
  );

  if (admin && admin.senha === senha) {
    // Autenticação bem-sucedida
    window.location.href = "pages/dashboard.html";
  } else {
    // Autenticação falhou
    alert("Email ou senha incorretos");
  }
}
