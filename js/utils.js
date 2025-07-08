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

// mostra o erro na tela debaixo do campo input
export function showError(errorElementClass, errorMessage) {
  let errorField = document.querySelector("." + errorElementClass);
  // Se o elemento não existir, tentar criá-lo
  if (!errorField) {
    // Tentar encontrar o container pai
    const container =
      document.querySelector(".form-input-container") ||
      document.querySelector(".form-input");
    if (container) {
      errorField = document.createElement("p");
      errorField.className = `labelError ${errorElementClass}`;
      container.appendChild(errorField);
    }
  }
  if (errorField) {
    errorField.classList.add("display-error");
    errorField.innerHTML = errorMessage;
  }
}

// limpa o erro da tela
export function clearError() {
  let errors = document.querySelectorAll(".labelError");
  for (let error of errors) {
    error.classList.remove("display-error");
    error.innerHTML = "";
  }
}

// deixa o campo input em vermelho e mostra erro
export function highlightInvalidField(fieldId, errorMessage = "") {
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

  // Mostrar erro se mensagem for passada
  if (errorMessage) {
    // Mapear id do campo para classe de erro
    let errorClass = "";
    if (fieldId.includes("Nome")) errorClass = "name-error";
    else if (fieldId.includes("Email")) errorClass = "email-error";
    else if (
      fieldId.toLowerCase().includes("pwd") &&
      !fieldId.toLowerCase().includes("confirm")
    )
      errorClass = "password-error";
    else if (fieldId.toLowerCase().includes("confirm"))
      errorClass = "confirm-password-error";
    else errorClass = fieldId + "-error";
    showError(errorClass, errorMessage);
  }

  const removeInvalidClassOnFocus = () => {
    field.classList.remove("input-invalid");
    // Limpar erro ao focar
    let errorClass = "";
    if (fieldId.includes("Nome")) errorClass = "name-error";
    else if (fieldId.includes("Email")) errorClass = "email-error";
    else if (
      fieldId.toLowerCase().includes("pwd") &&
      !fieldId.toLowerCase().includes("confirm")
    )
      errorClass = "password-error";
    else if (fieldId.toLowerCase().includes("confirm"))
      errorClass = "confirm-password-error";
    else errorClass = fieldId + "-error";
    const errorField = document.querySelector("." + errorClass);
    if (errorField) {
      errorField.classList.remove("display-error");
      errorField.innerHTML = "";
    }
    field.removeEventListener("focus", removeInvalidClassOnFocus);
    activeInvalidListeners.delete(fieldId);
  };
  field.addEventListener("focus", removeInvalidClassOnFocus);
  activeInvalidListeners.set(fieldId, removeInvalidClassOnFocus);
}
