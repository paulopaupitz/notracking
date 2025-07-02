import { createClient, readClient } from "./storage.js";
import { highlightInvalidField } from "./utils.js";
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

  let camposInvalidos = [];
  
  const nome = document.getElementById("txtNome").value.trim();
  const sobrenome = document.getElementById("txtSobrenome").value.trim();
  const dtNasc = document.getElementById("dataNascimento").value.trim();
  const email = document.getElementById("txtEmail").value.trim();

  if (!nome) {

    camposInvalidos.push("txtNome");
    // showSnackbar("O campo 'Nome' é obrigatório.", "warning");
    // highlightInvalidField("txtNome");
    // return;
  }
  if (!sobrenome) {
    
    camposInvalidos.push("txtSobrenome");
    // showSnackbar("O campo 'Sobrenome' é obrigatório.", "warning");
    // highlightInvalidField("txtSobrenome");
    // return;
  }
  if (!dtNasc) {
    camposInvalidos.push("dataNascimento");
    // showSnackbar("O campo 'Data de Nascimento' é obrigatório.", "warning");
    // highlightInvalidField("dataNascimento");
    // return;
  }
  if (!email) {
    camposInvalidos.push("txtEmail");
    // showSnackbar("O campo 'E-mail' é obrigatório.", "warning");
    // highlightInvalidField("txtEmail");
    // return;
  }

if(camposInvalidos.length > 0){
  camposInvalidos.forEach(idDoCampo=> {
    highlightInvalidField(idDoCampo);
  });
  showSnackbar("Por favor, preencha todos os campos destacados", "warning");
} 

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showSnackbar("Insira um e-mail válido.", "warning");
    highlightInvalidField("txtEmail");
    return;
  }

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
    showSnackbar("O E-mail informado já está em uso", "warning");
    highlightInvalidField("txtEmail");
    return;
  }
  createClient(client);
  showSnackbar("Cliente cadastrado com sucesso!", "success");
  setTimeout(() => {
    clearFields();
  }, 1500);
  console.log("Cadastrando Cliente");
}
