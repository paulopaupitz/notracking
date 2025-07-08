const activeInvalidListeners = new Map();

export function inverterData(isoDate) {
  const [ano, mes, dia] = isoDate.split("-");
  return `${dia}/${mes}/${ano}`;
}

export function printDiv() {
  window.print();
}

// FUNÇÃO DARKMODE (Inalterada)
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
    localStorage.removeItem("theme", "light");
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

// deixa o campo input em vermelho e mostra erro (LÓGICA CORRIGIDA)
export function highlightInvalidField(fieldId, errorMessage = "") {
  const field = document.getElementById(fieldId);
  if (!field) return;

  // Encontra o elemento de parágrafo de erro adjacente ao campo de input.
  const errorField = field.nextElementSibling;

  // Remove listeners antigos para evitar duplicidade
  if (activeInvalidListeners.has(fieldId)) {
    const existingListener = activeInvalidListeners.get(fieldId);
    field.removeEventListener("focus", existingListener);
    activeInvalidListeners.delete(fieldId);
  }

  // Adiciona a classe que torna o campo inválido (vermelho)
  field.classList.add("input-invalid");

  // Se houver uma mensagem de erro e o campo de erro for válido, exibe a mensagem.
  if (
    errorMessage &&
    errorField &&
    errorField.classList.contains("labelError")
  ) {
    errorField.innerHTML = errorMessage;
    errorField.classList.add("display-error");
  }

  const removeInvalidClassOnFocus = () => {
    field.classList.remove("input-invalid");

    // Limpa a mensagem de erro ao focar no campo
    if (errorField && errorField.classList.contains("labelError")) {
      errorField.classList.remove("display-error");
      errorField.innerHTML = "";
    }

    // Remove o listener para não acumular eventos
    field.removeEventListener("focus", removeInvalidClassOnFocus);
    activeInvalidListeners.delete(fieldId);
  };

  field.addEventListener("focus", removeInvalidClassOnFocus);
  activeInvalidListeners.set(fieldId, removeInvalidClassOnFocus);
}
