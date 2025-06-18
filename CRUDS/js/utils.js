// import { getLocalStorageAdmin } from "./storage.js";

export function inverterData(isoDate) {
  const [ano, mes, dia] = isoDate.split('-');
  return `${dia}/${mes}/${ano}`;
}
export function printDiv() {
  window.print();
}


// FUNÇÃO DARKMODE FUNCIONANDO VIVA!
export function loadTheme() {
  const theme = localStorage.getItem("theme");
  const interruptor = document.getElementById("interruptor");
  if (theme === "dark") {
    document.body.classList.add("darkmode");
    if (interruptor) interruptor.checked = true;
  }
}

export function toggleDarkMode() {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
    localStorage.removeItem("theme"); 
  }
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





