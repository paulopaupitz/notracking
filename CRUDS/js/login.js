async function logarUsuario() {
    // Pegar valores dos campos
    let email = document.getElementById("txtEmail").value;
    let senha = document.getElementById("pwd").value;

    // Validar campos vazios
    if (!email || !senha) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    try {
        // Mostrar ícone de loading apenas após validação
        toggleLoadingIcon();
        
        // Buscar dados do JSON
        const response = await fetch('/CRUDS/data/usuarios.json');
        const data = await response.json();
        
        // Verificar credenciais
        const usuario = data.usuarios.find(user => 
            user.email === email && user.senha === senha
        );

        if (usuario) {
            // Login bem sucedido
            alert("Login realizado com sucesso!");
            // Adiciona um delay de 1.5 segundos antes do redirecionamento
            setTimeout(() => {
                window.location.href = "/CRUDS/pages/dashboardTest.html";
            }, 1500);
        } else {
            alert("Email ou senha incorretos!");
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        alert("Erro ao fazer login. Tente novamente.");
    } finally {
        // Esconder ícone de loading
        toggleLoadingIcon();
    }
}

const toggleLoadingIcon = () => {
    document.getElementById("enterButton").style.display = 
        document.getElementById("enterButton").style.display !== "none" ? "none" : "block";
    document.getElementById("loadingIcon").style.display = 
        document.getElementById("loadingIcon").style.display === "block" ? "none" : "block";
};

// Adicionar evento de clique ao botão de login
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("enterButton").addEventListener("click", (e) => {
        e.preventDefault();
        logarUsuario();
    });
});