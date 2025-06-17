import { getLocalStorageAdmin } from "./storage.js";

export function inverterData(isoDate) {
  const [ano, mes, dia] = isoDate.split('-');
  return `${dia}/${mes}/${ano}`;
}
export function printDiv() {
  window.print();
}

// export function loginAdmin() {
//   const email = document.getElementById("txtEmail").value;
//   const senha = document.getElementById("pwd").value;
//   const admin = getLocalStorageAdmin();
//   const adminEncontrado = admin.find(admin => admin.email === email && admin.senha === senha);
//   if (adminEncontrado) {
//     window.location.href = "/CRUDS/pages/login.html";
//   } else {
//     alert("Email ou senha incorretos");
//   }
// }
// let darkmode = localStorage.getItem('darkmode')

// const enableDarkmode = () => {
//   document.body.classList.add('darkmode')
//   localStorage.setItem('darkmode', 'active')
// }
// const disableDarkmode = () => {
//   document.body.classList.remove('darkmode')
//   localStorage.setItem('darkmode', null)
// }

// if(darkmode === "active") enableDarkmode()

// const themeSwitch = document.getElementById('theme-switch')
//   themeSwitch.addEventListener("click", () => {
//     darkmode = localStorage.getItem('darkmode')
//     darkmode !== "ativo" ? enableDarkmode() : disableDarkmode()
//   })





