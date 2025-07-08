export function showSnackbar(message, type = "") {
  const snackbar = document.getElementById("snackbar");

  if (!snackbar) {
    console.error("Snackbar element not found");
    return;
  }

  const iconSpan = snackbar.querySelector(".snackbar-icon");
  const textSpan = snackbar.querySelector(".snackbar-text");

  if (!textSpan) {
    console.error("Snackbar text element not found");
    return;
  }

  console.log("Showing snackbar:", message, type);

  // Definir a mensagem
  textSpan.textContent = message;

  // Remover classes anteriores
  snackbar.classList.remove("success", "error", "warning", "show");

  // Adicionar a classe do tipo
  if (type) {
    snackbar.classList.add(type);
  }

  // Mostrar o snackbar
  snackbar.classList.add("show");

  // Esconder após 3 segundos
  setTimeout(() => {
    snackbar.classList.remove("show");
    console.log("Snackbar hidden");
  }, 3000);

  // Animação de entrada/saída
  // setTimeout(() => {
  //     snackbar.classList.add("show");
  //     setTimeout(() => {
  //         snackbar.classList.remove("show");
  //         setTimeout(() => snackbar.remove(), 300);
  //     }, 3000);
  // }, 10);
}
