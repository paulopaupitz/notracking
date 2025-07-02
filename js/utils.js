const activeInvalidListeners = new Map();
export function inverterData(isoDate) {
  const [ano, mes, dia] = isoDate.split("-");
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

export function showError(errorElementClass, errorMessage){
  const errorField = document.querySelector("."+errorElementClass);
  if(errorField){
    errorField.classList.add("display-error");
    errorField.innerHTML = errorMessage;
  }
}

export function clearError() {
  let errors = document.querySelectorAll(".error");
  for(let error of errors){
    error.classList.remove("display-error");
  }
}


export function highlightInvalidField(fieldId) {
  const field = document.getElementById(fieldId);
  if (!field) return;

  // *REMOVENDO EVENTLISTENER SE JÁ TIVER UM ATIVO PARA NÃO FICAR DUPLICADO
  if (activeInvalidListeners.has(fieldId)) {
    const existingListener = activeInvalidListeners.get(fieldId);
    field.removeEventListener("focus", existingListener);
    activeInvalidListeners.delete(fieldId);
  }
  // *DEIXANDO O CAMPO EM VERMELHO
  field.classList.add("input-invalid");
  const removeInvalidClassOnFocus = () => {
    field.classList.remove("input-invalid");
    field.removeEventListener("focus", removeInvalidClassOnFocus);
    activeInvalidListeners.delete(fieldId);
  };
  field.addEventListener("focus", removeInvalidClassOnFocus);
  activeInvalidListeners.set(fieldId, removeInvalidClassOnFocus);

  setTimeout(() => {
    field.classList.remove("input-invalid");
  }, 3000);
}
