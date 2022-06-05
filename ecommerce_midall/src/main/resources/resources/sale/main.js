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
					//console.log(produtos)
						
				    var el = document.createElement("option");
				    el.textContent = produtos;
				    el.value = produtos;
				    select.appendChild(el);				
		
					}
			} else {

				let boxAlimento = document.createElement("option");
				boxAlimento.textContent = 'Alimentos';
				boxAlimento.value = 'alimento';
				select.appendChild(boxAlimento);

				let boxEletronico = document.createElement("option");
				boxEletronico.textContent = 'Eletronicos';
				boxEletronico.value = 'eletronicos';
				select.appendChild(boxEletronico);

				let boxDecoracoes = document.createElement("option");
				boxDecoracoes.textContent = 'Decorações';
				boxDecoracoes.value = 'decoracoes';
				select.appendChild(boxDecoracoes);

				let boxModa = document.createElement("option");
				boxModa.textContent = 'Moda';
				boxModa.value = 'moda';
				select.appendChild(boxModa);

				let boxFerramentas = document.createElement("option");
				boxFerramentas.textContent = 'Ferramentas';
				boxFerramentas.value = 'ferramentas';
				select.appendChild(boxFerramentas);

				let boxMusicas = document.createElement("option");
				boxMusicas.textContent = 'Músicas';
				boxMusicas.value = 'musicas';
				select.appendChild(boxMusicas);
					
			}
	}
	});
}
        

function cadastrarPromocao(){
	
	
	//opçãoPromo
	let opcaoPromo = document.getElementById('lstProduto').value
	
	//Nome Campo (Nome do produto/categoria selecionada)
    let opcaoCampo = document.getElementById("optionSelected");
    let nomeCampo = opcaoCampo.options[opcaoCampo.selectedIndex].value;


	//Tipo Promocao (desconto, desconto por quantidade)
	var select = document.getElementById("tipo-promocao");    
	var tipoPromocao = select.options[select.selectedIndex].text;

	//Porcentagem Promocao
    let porcentagemPromocao = document.getElementById("porcentagem-promocao");
	let valorPorcentagem = porcentagemPromocao.options[porcentagemPromocao.selectedIndex].value;
	
	//Quantidade Bonus (Ganhe)
	let qntdBonus = document.getElementById("quantidade-bonus").value
	qntdBonus = parseInt(qntdBonus)
	
	//Quantidade Minima (Compre)
	let qntdMinima = document.getElementById("quantidade-minima").value
	qntdMinima = parseInt(qntdMinima)
	
	//NomePromoção
    let nomePromocao = document.getElementById("nome-promocao").value;


	console.log('Opção:', opcaoPromo) 
	console.log('Nome Campo:', nomeCampo)
	console.log('Tipo Promoção:', tipoPromocao) 
	console.log('Valor Porcentagem:', valorPorcentagem)
	console.log('Quantidade Bonus:', qntdBonus)
	console.log('Quantidade Minima:', qntdMinima)
	console.log('Nome Promoção:', nomePromocao)


	if (valorPorcentagem == 'null' | valorPorcentagem == 'undefined') {
		valorPorcentagem = 0
		console.log('converteu')
	}

 	 $(document).ready(function() {

		$.ajax({
			url: "http://localhost:8080/cadastroPromocao",
			async: false,
			data: JSON.stringify(
				{
					"id": 0,
					"opcaoPromo": opcaoPromo,
					"nomeCampo": nomeCampo.toUpperCase(),
					"tipoPromocao": tipoPromocao,
					"porcentPromo": valorPorcentagem,
					"quantidadeBonus": qntdBonus,
					"quantidadeMin": qntdMinima,
					"nomePromo": nomePromocao,
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


function verificaTipoPromocao() {
	var select = document.getElementById("tipo-promocao");    
	var opcaoTexto = select.options[select.selectedIndex].text;
	var opcaoValor = select.options[select.selectedIndex].value;
	var select = document.getElementById("optionSelected");

	if (opcaoValor !== 'null') {

		if (opcaoValor === 'desconto') {
			document.getElementById('promocao-porcentagem').style.visibility = '';
			document.getElementById('promocao-compre').style.visibility = 'hidden';
			document.getElementById('promocao-ganhe').style.visibility = 'hidden';
			document.getElementById('promocao-porcentagem').style.display = '';
			document.getElementById('promocao-compre').style.display = 'none';
			document.getElementById('promocao-ganhe').style.display = 'none';
		} 
		else if (opcaoValor === 'desconto-quantidade') {
			document.getElementById('promocao-porcentagem').style.visibility = '';
			document.getElementById('promocao-compre').style.visibility = '';
			document.getElementById('promocao-ganhe').style.visibility = 'hidden';
			document.getElementById('promocao-porcentagem').style.display = '';
			document.getElementById('promocao-compre').style.display = '';
			document.getElementById('promocao-ganhe').style.display = 'none';
		} 
		else if (opcaoValor === 'quantidade-bonus') {
			document.getElementById('promocao-ganhe').style.visibility = '';
			document.getElementById('promocao-compre').style.visibility = '';
			document.getElementById('promocao-porcentagem').style.visibility = 'hidden';
			document.getElementById('promocao-ganhe').style.display = '';
			document.getElementById('promocao-compre').style.display = '';
			document.getElementById('promocao-porcentagem').style.display = 'none';
		}
	} 
}