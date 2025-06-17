document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM carregado, inicializando pesquisa...');
  
  const searchInput = document.getElementById("txtBusca");
  // console.log('Elemento de busca:', searchInput);
  
  if (searchInput) {
    searchInput.addEventListener("keyup", function() {
      // console.log('Evento keyup disparado');
      const busca = this.value.toLowerCase().trim();
      // console.log('Termo de busca:', busca);
      
      const linhas = document.querySelectorAll("#dados-tabela tr");
      // console.log('Número de linhas encontradas:', linhas.length);
      
      linhas.forEach((linha, index) => {
        const texto = linha.textContent.toLowerCase();
        // console.log(`Linha ${index}:`, texto);
        
        if (texto.includes(busca)) {
          linha.style.display = "";
        } else {
          linha.style.display = "none";
        }
      });
    });
  } else {
    console.error('Elemento de busca não encontrado!');
  }
});


  // function formatString(value) {
  //   return value.toLowerCase().trim().normalize('NFD');
  // }