document.addEventListener("DOMContentLoaded", function () {

  const cadastroButton = document.getElementById("buttonCadastrar");
  if (cadastroButton) {
    cadastroButton.addEventListener("click", saveClient);
  }

  // carrega dados existentes e adiciona listeners para os botões da tabela
  const tabela = document.querySelector("#dados-tabela");
  if (tabela) {
    updateTable();
    // delega clicks nos botões Editar e Excluir da tabela
    tabela.addEventListener("click", editDeleteView);
  }

  // botão que salva as edições do modal
  const btnSalvarEdicao = document.getElementById('btnSalvarEdicao');
  if (btnSalvarEdicao) {
    btnSalvarEdicao.addEventListener('click', saveEdit);
  }

  // botão responsável por fechar o modal sem salvar alterações
  const btnFecharModal = document.getElementById('btnFecharModal');
  if (btnFecharModal) {
    btnFecharModal.addEventListener('click', closeModal);
  }


  // const abrirModal = document.getElementById("btnEditar")
  // if(abrirModal){
  //   abrirModal.addEventListener("click", openModal);
  // }



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
function saveClient() {
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

const clearFields = () => {
  document.getElementById("txtNome").value = "";
  document.getElementById("txtSobrenome").value = "";
  document.getElementById("dataNascimento").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtEndereco").value = "";
  document.getElementById("txtInfo").value = "";
  document.getElementById("txtInteresse").value = "";
  document.getElementById("txtSentimentos").value = "";
  document.getElementById("txtValores").value = "";
};

//colocar dados na tabela
const createRow = (client, index) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
            <td>${client.nome}</td>
            <td>${client.sobrenome}</td>
            <td>${client.email}</td>
            <td>${inverterData(client.dtNasc)}</td>
            <td>${client.valores}</td>
            <td>
            <div class="botoes-acoes">
                <button class="button btnEditar" id="edit-${index}">
                    <span class="material-symbols-outlined">edit</span>
                </button>
                <button class="button btnExcluir" id="delete-${index}">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
            </td>
            `;
  document.querySelector("#dados-tabela").appendChild(newRow);
};

//atualizando a tabela
function updateTable() {
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

// remove um cliente do localStorage pelo índice
const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
};

// trata os cliques nos botões de editar ou excluir da tabela
function editDeleteView(event) {
  const button = event.target.closest('button');
  if (!button) return;

  const [action, index] = button.id.split('-');

  if (action === 'edit') {
    // popula o modal com os dados e abre para edição
    const client = readClient()[index];
    document.getElementById('modal-form').dataset.index = index;
    fillModal(client);
    openModal();
  } else if (action === 'delete') {
    // remove o registro e atualiza a listagem
    deleteClient(index);
    updateTable();
  }
};

// exibe o modal de edição
const openModal = () => {
  document.getElementById('modal').classList.add('active');
};
// esconde o modal
function closeModal() {
  document.getElementById('modal').classList.remove('active');
}

// preenche os inputs do modal com os dados do cliente
const fillModal = (client) => {
  document.getElementById('modal-txtNome').value = client.nome;
  document.getElementById('modal-txtSobrenome').value = client.sobrenome;
  document.getElementById('modal-dataNascimento').value = client.dtNasc;
  document.getElementById('modal-txtEmail').value = client.email;
  document.getElementById('modal-txtEndereco').value = client.endereco;
  document.getElementById('modal-txtInfo').value = client.outrasInfos;
  document.getElementById('modal-txtInteresse').value = client.interesses;
  document.getElementById('modal-txtSentimentos').value = client.sentimentos;
  document.getElementById('modal-txtValores').value = client.valores;
};

// valida os campos do modal antes de salvar
const isValidModalFields = () => document.getElementById('modal-form').reportValidity();

// aplica as alterações feitas no modal ao cliente correspondente
function saveEdit() {
  if (!isValidModalFields()) return;

  const index = document.getElementById('modal-form').dataset.index;
  const client = {
    nome: document.getElementById('modal-txtNome').value,
    sobrenome: document.getElementById('modal-txtSobrenome').value,
    dtNasc: document.getElementById('modal-dataNascimento').value,
    email: document.getElementById('modal-txtEmail').value,
    endereco: document.getElementById('modal-txtEndereco').value,
    outrasInfos: document.getElementById('modal-txtInfo').value,
    interesses: document.getElementById('modal-txtInteresse').value,
    sentimentos: document.getElementById('modal-txtSentimentos').value,
    valores: document.getElementById('modal-txtValores').value,
  };

  updateClient(index, client);
  updateTable();
  closeModal();
};