export function showSnackbar(message, type = "") {
    const snackbar = document.getElementById("snackbar");
    
    const iconSpan = snackbar.querySelector(".snackbar-icon");
    const textSpan = snackbar.querySelector(".snackbar-text");
    
    // snackbar.textContent = message;
    textSpan.textContent = message;
    
    snackbar.classList.remove("success", "error", "warning");
    snackbar.classList.add(type);


    snackbar.classList.add("show");




    setTimeout(() => {
        snackbar.classList.remove("show");
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
