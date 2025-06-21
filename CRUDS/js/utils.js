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


export function loginAdmin() {
  console.log("Função loginAdmin chamada");
  
  const email = document.getElementById("txtEmail").value;
  const senha = document.getElementById("pwd").value;
  
  console.log("Email:", email);
  console.log("Senha:", senha);
  
  if (email.trim() === "" || senha.trim() === "") {
    console.log("I'm sorry, Dave. I'm afraid I can't do that")
    alert("Por favor, preencha todos os campos!");
    return;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log("I'm sorry, Dave. I'm afraid I can't do that")
    alert("Por favor, insira um email válido!");
    return;
  }
  alert("Login realizado com sucesso! Redirecionando...");
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1500);
}






