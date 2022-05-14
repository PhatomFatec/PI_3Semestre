//Ativa Modal ao clicar no botÃ£o "Cadastrar Produto"
const openModal = () => document.getElementById('modal')
	.classList.add('active')

const closeModal = () => document.getElementById('modal')
	.classList.remove('active')

document.getElementById('cadastrarCliente')
	.addEventListener('click', openModal)

document.getElementById('modalClose')
	.addEventListener('click', closeModal)

document.getElementById('btn-Cancelar')
	.addEventListener('click', closeModal)



function funcaoSalvar() {

	$.ajax({
		type: "GET",
		url: "http://localhost:8080/carrinho",
		data: 'teste',
		cache: false,
		success: function(data) {
			console.log('Get Realizado!')
			console.log(data)
			var items = [];

             $.each(data, function(i){


                items.push("<tr><td><span" + this.nomeProd + "></span></td>" + "<tr><td><span" + this.codProd + "></span></td></tr>");
            });
            $("#cleiton").append(items);
            
            
			document.getElementById('colunaNome').innerText = data[0]['nomeProd']
			document.getElementById('colunaCodigo').innerText = data[0]['codProd']
			document.getElementById('colunaDescricao').innerText = data[0]['descProd']
			document.getElementById('colunaCategoria').innerText = data[0]['categoria']
			document.getElementById('colunaPreco').innerText = "R$ " + data[0]['valorProd']
			//document.getElementById('colunaQuantidade').value = "1"

	
			document.getElementById('span-precoBruto').innerText = "R$79.00"
			document.getElementById('span-precoDesconto').innerText = "R$10.00"
			document.getElementById('span-precoTotal').innerText = "R$69.00"
		}
	});
}
function listarProduto() {

	$.ajax({
		type: "GET",
		url: "http://localhost:8080/carrinho",
		data: 'teste',
		cache: false,
		success: function(data) {
			console.log('Get Realizado!')
			console.log(data)
			
			var items = [];

             $.each(data, function(i){


                items.push("<tr><th><b> Nome: " + this.nomeProd + "</span>&nbsp;</th>" + "<tr><th><b> Categoria: " + this.categoria + "</span>&nbsp;</th>" +"<tr><th><b> Preço: R$" + this.valorProd + "</span>&nbsp;</th></tr></b>");
            });
            $("#douglas").append(items);
           
		}

	});
}

function funcaoAtualizar() {
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/carrinho",
		data: 'teste',
		cache: false,
		success: function(data) {
			console.log('Get Realizado!')
			console.log(data)
			let quantidade = parseInt(document.getElementById('colunaQuantidade').value)
			let valorPreco = document.getElementById('colunaPreco').innerHTML
			valorPreco = valorPreco.replace('R$', '')
			valorPreco = parseInt(valorPreco)

			let precoTotal = (quantidade * valorPreco)
			console.log(precoTotal)
			console.log(typeof (precoTotal))
			document.getElementById('colunaPreco').innerText = "R$ " + precoTotal

		}
	});
}



function finalizarCompra(){
	
	
    let codigoVenda = document.getElementById("colunaCodigo");
    let nomeVenda = document.getElementById("colunaNome");
	let descVenda = document.getElementById("colunaDescricao");
	let catVenda = document.getElementById("colunaCategoria");
	let quantVenda = document.getElementById("colunaQuantidade");
	let valorVenda = document.getElementById("colunaPreco");
    
    
 	$(document).ready(function() {

		$.ajax({
			url: "http://localhost:8080/cadastroPromocao",
			async: false,
			data: JSON.stringify(
				{
					"id": 0,
					"nomeVenda": codigoVenda,
					"descVenda": nomeVenda,
					"catVenda": catVenda,
					"quantVenda": quantVenda,
					"valorVenda": valorVenda,
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
