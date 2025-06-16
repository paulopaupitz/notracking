


  document.getElementById("txtBusca").addEventListener("keyup", funciton() {
    var busca = document.getElementById("txtBusca").value.toLowerCase();
    
    for (var i = 0; i < dados-tabela.childNodes.length; i++){

      var achou = false;
      var tr = dados-tabela.childNodes[i];
      var td = tr.childNodes;

      for( var j = 0; j < td.length; j++){
        var value  = td[j].childNodes[0].nodeValue.toLowerCase();

        if(value.indexOf(busca) >= 0 ){
          achou = true;
        }
      }
      
      if(achou){
        tr.style.display = "table-row";
      }else{
        tr.style.display = "none";
      }
    }
  });


  // function formatString(value) {
  //   return value.toLowerCase().trim().normalize('NFD');
  // }