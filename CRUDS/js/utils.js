import { getLocalStorageAdmin } from "./storage.js";

export function inverterData(isoDate) {
  const [ano, mes, dia] = isoDate.split('-');
  return `${dia}/${mes}/${ano}`;
}
export function printDiv() {
  window.print();
}

export function loginAdmin() {
  const email = document.getElementById("txtEmail").value;
  const senha = document.getElementById("pwd").value;
  const admin = getLocalStorageAdmin();
  const adminEncontrado = admin.find(admin => admin.email === email && admin.senha === senha);
  if (adminEncontrado) {
    window.location.href = "/CRUDS/pages/login.html";
  } else {
    alert("Email ou senha incorretos");
  }
}




