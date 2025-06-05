document.getElementById("cadastroButton").addEventListener("click",function(event) {
    event.preventDefault(); 
   

    const nome = document.getElementById("txtNome").value;
    const sobrenome = document.getElementById("txtSobrenome").value;
    const ativo = document.getElementById("CHECKativo").checked; 
    const dtNasc = document.getElementById("dataNascimento").value;
    const email = document.getElementById("txtEmail").value; 
    const endereco = document.getElementById("txtEndereco").value; 
    const outrasInfos = document.getElementById("txtInfo").value; 
    const interesses = document.getElementById("txtInteresse").value; 
    const sentimentos = document.getElementById("txtSentimentos").value; 
    const valores = document.getElementById("txtValores").value; 

    const novoCliente = { 
        nome, sobrenome, ativo, dtNasc, email, endereco, outrasInfos, interesses, sentimentos, valores 
    }; 
    
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    clientes.push(novoCliente);

    localStorage.setItem('clientes', JSON.stringify(clientes));

    const form = document.getElementById("form-register");

    if (form)
        form.reset();
    
    

    console.log("Cliente adicionado:", novoCliente);
    console.log("Todos os clientes:", clientes);
});