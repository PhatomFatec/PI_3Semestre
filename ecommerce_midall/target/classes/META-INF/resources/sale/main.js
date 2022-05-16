var listarProdutos = function() {
                
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/carrinho",
		data: 'teste',
		cache: false,
		success: function(data) {
			console.log('Get Realizado!')
			console.log(data)
			console.log(data[0]['nomeProd'])
			
			var select = document.getElementById("lstProduto");    
			var opcaoTexto = select.options[select.selectedIndex].text;
			var opcaoValor = select.options[select.selectedIndex].value;
			var select = document.getElementById("optionSelected");
			

			
			
			if (opcaoValor == 'produto') {
				for (k in data) {
					let produtos = data[k]['nomeProd']
					console.log(produtos)
						
				    var el = document.createElement("option");
				    el.textContent = produtos;
				    el.value = produtos;
				    select.appendChild(el);
					}
			} else {
				for (k in data) {
					let produtos = data[k]['categoria']
					console.log(produtos)
						
				    var el = document.createElement("option");
				    el.textContent = produtos;
				     el.value = produtos;
				     select.appendChild(el);
					}
			}
	}
	});
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
		alert('Promoção Criada!')
		console.log("Inserção Realizada!")
	}); 

}