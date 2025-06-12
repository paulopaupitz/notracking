document.addEventListener("DOMContentLoaded", function () {

  const cadastroButton = document.getElementById("buttonCadastrar");
  if (cadastroButton) {
    cadastroButton.addEventListener("click", saveClient);
  }

  const tabela = document.querySelector("#dados-tabela");
  if (tabela) {
    updateTable();
  }
});

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("dbClient")) ?? [];
const setLocalStorage = (dbClient) =>
  localStorage.setItem("dbClient", JSON.stringify(dbClient));

//invertendo data nascimento
function inverterData(isoDate) {
  const [ano, mes, dia] = isoDate.split("-");
  return `${dia}/${mes}/${ano}`;
}
  

//salvando clientes
const saveClient = () => {
  if (isValidFields()) {
    const client = {
      nome: document.getElementById("txtNome").value,
      sobrenome: document.getElementById("txtSobrenome").value,
      dtNasc: document.getElementById("dataNascimento").value,
      email: document.getElementById("txtEmail").value,
      endereco: document.getElementById("txtEndereco").value,
      outrasInfos: document.getElementById("txtInfo").value,
      interesses: document.getElementById("txtInteresse").value,
      sentimentos: document.getElementById("txtSentimentos").value,
      valores: document.getElementById("txtValores").value,
    };
    createClient(client);
    alert('Cliente cadastrado com sucesso!')
    updateTable();
    clearFields();
    console.log("Cadastrando Cliente");
  }
};

//verifica se os campos estão preenchidos
const isValidFields = () => {
  return document.getElementById("form-register").reportValidity();
};

//limpa os campos
const clearFields = () => {
  const fields = document.querySelectorAll(".input");
  fields.forEach((field) => (field.value = ""));
};

//colocar dados na tabela
const createRow = (client) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
            <td>${client.nome}</td>
            <td>${client.sobrenome}</td>
            <td>${client.email}</td>
            <td>${inverterData(client.dtNasc)}</td>
            <td>${client.valores}</td>
            <td>
            <div class="botoes-acoes">
                <button class="btnView">
                    <span class="material-symbols-outlined">visibility</span>
                </button>
                <button class="btnEditar">
                    <span class="material-symbols-outlined">edit</span>
                </button>
                <button class="btnExcluir">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
            </td>
            `;
  document.querySelector("#dados-tabela").appendChild(newRow);
};

//atualizando a tabela
const updateTable = () => {
  clearTable();
  const dbClient = readClient();
  dbClient.forEach(createRow);
};

//limpa a tabela
const clearTable = () => {
  const rows = document.querySelectorAll("#dados-tabela>tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
};

//CRIANDO CLIENTE
const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

//atualizar cliente
const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};

//ler cliente
const readClient = () => getLocalStorage();

//DELETAR CLIENT
const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
};
