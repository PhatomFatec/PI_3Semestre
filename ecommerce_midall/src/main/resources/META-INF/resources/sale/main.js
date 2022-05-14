var listarProdutos = function() {
                
	var select = document.getElementById("lstProduto");    
    var opcaoTexto = select.options[select.selectedIndex].text;
    var opcaoValor = select.options[select.selectedIndex].value;
        
    //console.log(opcaoValor); 
        
        
    if (opcaoValor == 'produto') {
    	document.getElementById('btn-selected-listar').innerHTML=' Produto:';
        var select = document.getElementById("optionSelected");
        select.options.length = 0;
        var options = ["Produto - 1", "Produto - 2", "Produto - 3", "Produto - 4", "Produto - 5"];
        
        for(var i = 0; i < options.length; i++) {
        	var opt = options[i];
	        var el = document.createElement("option");
	        el.textContent = opt;
	        el.value = opt;
	        select.appendChild(el);
		} 
        
      } else{
      	document.getElementById('btn-selected-listar').innerHTML=' Categoria:';
        var select = document.getElementById("optionSelected");
        select.options.length = 0;
       	var options = ["Categoria - 1", "Categoria - 2", "Categoria - 3", "Categoria - 4", "Categoria - 5"];
        
        for(var i = 0; i < options.length; i++) {
        	var opt = options[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
                        select.appendChild(el);
        } 
      	}      
}
        

function cadastrarPromocao(){
	
    let porcentagemPromocao = document.getElementById("porcentagem-promocao");
    let opcaoPromocao = document.getElementById("optionSelected");
    let nomePromocao = document.getElementById("nome-promocao").value;
    let valorPorcentagem = porcentagemPromocao.options[porcentagemPromocao.selectedIndex].value;
    let opcaoSelecionada = opcaoPromocao.options[opcaoPromocao.selectedIndex].value;

 	$(document).ready(function() {

		$.ajax({
			url: "http://localhost:8080/cadastroPromocao",
			async: false,
			data: JSON.stringify(
				{
					"id": 0,
					"nomePromo": nomePromocao,
					"opcaoPromo": opcaoSelecionada,
					"porcentPromo": valorPorcentagem,
				}
			),
			type: 'POST',
			headers: {
				Accept: 'application/json;charset=utf-8',
				'Content-Type': 'application/json'
			},
			dataType: 'json'
		});
		console.log("Inserção Realizada!")
	}); 

}