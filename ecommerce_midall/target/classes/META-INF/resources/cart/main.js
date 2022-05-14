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

			$.each(data, function(i) {


				items.push(`<tr><td><span>${this.codProd} </td></span> <td><span> ${this.nomeProd} </td></span> <td><span> ${this.descProd} </td></span> <td><span> ${this.categoria} </td></span> <td><input class="modal-field" type="number" step="1" min="1" max="100"></td></span><td><span>R$ ${this.valorProd}  </td></span> <td><button type="button" class="button red" onclick="funcaoRemover()" id="btn-Remover"><i class="material-icons">close</i></button></td></tr> `);
			});
			$("#cleiton").append(items);



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

			$.each(data, function(i) {


				items.push("<tr><th><b> Nome: " + this.nomeProd + "</span>&nbsp;</th>" + "<tr><th><b> Categoria: " + this.categoria + "</span>&nbsp;</th>" + "<tr><th><b> Preço: R$" + this.valorProd + "</span>&nbsp;</th></tr></b>");
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

			var items = [];
			$.each(data, function(i) {


				items.push(document.getElementById('colunaQuantidade').value[data]);
			});
			console.log(items)
			let quantidade = parseInt(document.getElementById('colunaQuantidade').value)
			console.log(quantidade)
			let valorPreco = document.getElementById('colunaPreco').innerHTML
			console.log(valorPreco)
			valorPreco = valorPreco.replace('R$', '')
			valorPreco = parseInt(valorPreco)

			let precoTotal = (quantidade * valorPreco)
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
