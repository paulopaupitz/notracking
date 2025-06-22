import { readClient, deleteClient } from "./storage.js";
import { fillModal, openModal } from "./modal.js";
import { inverterData } from "./utils.js";

export function createRow(client, index) {
  const newRow = document.createElement("tr");
  const statusColor = client.status === 'Ativo' ? 'status-ativo' : 'status-inativo';
  newRow.innerHTML = `
            <td>${client.nome}</td>
            <td>${client.sobrenome}</td>
            <td>${client.email}</td>
            <td>${inverterData(client.dtNasc)}</td>
            <td>
            <span class="${statusColor}">${client.status}</span>
            </td>
            <td id="edicaoRow">
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
}

export function clearTable() {
  const rows = document.querySelectorAll("#dados-tabela>tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
}

export function updateTable() {
  clearTable();
  const dbClient = readClient();
  dbClient.forEach(createRow);
}

export function editDeleteView(event) {
  const button = event.target.closest("button");
  if (!button) return;

  const [action, index] = button.id.split("-");

  if (action === "edit") {
    const client = readClient()[index];
    document.getElementById("modal-form").dataset.index = index;
    fillModal(client);
    openModal();
  } else if (action === "delete") {
    deleteClient(index);
    updateTable();
  }
}