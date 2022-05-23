//Ativa Modal ao clicar no botÃ£o "Cadastrar Produto"
const openModal = () => document.getElementById('modal')
	.classList.add('active')

const closeModal = () => document.getElementById('modal')
	.classList.remove('active')

document.getElementById('cadastrarCliente')
	.addEventListener('click', openModal)

document.getElementById('modalClose')
	.addEventListener('click', closeModal)

//document.getElementById('btn-Cancelar')
//.addEventListener('click', closeModal)



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
			let checkbox = $('#modal-produto');

			//if ($(checkbox).is(":checked")) {
			//	console.log("foi")
			//	} else {
			//	console.log("Nao foi")
			//	}
			var is_checked = false;


			
			
				$('input[type="checkbox"]').each(function() {
					if ($(this).is(":checked")) {
						is_checked = true;
						console.log("foi")
						items.push(`
					<tr id="jorge"><td><span>${this.codProd} </td></span> 
					<td><span id="nomeRow$" class="rowNome"> ${this.nomeProd} </td></span> 
					<td><span id="descRow$" class="rowDesc"> ${this.descProd} </td></span> 
					<td><span id="catRow$" class="rowCat"> ${this.categoria} </td></span> 
					<td><input id="quantRow$" class="modal-field" type="number" step="1" min="1" max="100" value="1"></td></span> 
					<td><span id="valorRow$" class="rowValor">R$ ${this.valorProd}  </td></span>
					<td><span id="valorRow$" class="rowValor">R$ ${this.valorProd}  </td></span>
					<td><button type="button" class="button red" onclick="funcaoRemover()" id="btn-Remover$"><i class="material-icons">close</i></button></td></tr> 
				`);

					}
				



			});
			$("#cleiton").append(items);



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
			//console.log('Get Realizado!')
			//console.log(data)

			var items = [];

			$.each(data, function(i) {


				items.push(`<input type="checkbox" id=modal-produto name="Select" value="selecionar"><label for "check">` + "<tr ><th><b> Nome: </b>" + this.nomeProd + "<br></span>&nbsp;</th>" + "<tr><th> <b>Descrição:</b>" + this.descProd + "<br><tr><th> <b>Categoria:</b> " + this.categoria + "<br></span>&nbsp;</th>" + "<tr><th> <b>Preço:</b> R$" + this.valorProd + "<br></span>&nbsp;</th></tr></b> <p>" + '</label>');
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
			//console.log('Get Realizado!')
			//console.log(data)

			var items = [];
			$.each(data, function(i) {
				items.push(`<td><span>R$ ${this.valorProd}  </td></span>`);
				console.log(items)

			});

			let quantidade = parseInt(document.getElementById('colunaQuantidade').value)
			let valorPreco = document.getElementById('colunaPreco').innerHTML
			valorPreco = valorPreco.replace('R$', '')
			valorPreco = parseInt(valorPreco)

			let precoTotal = (quantidade * valorPreco)
			document.getElementById('colunaPreco').innerText = "R$ " + precoTotal

		}
	});
}



function finalizarCompra() {


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




function verificarPromocao() {
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/cadastroPromocao",
		data: 'teste',
		cache: false,
		success: function(data) {

			console.log('Get Realizado!!')
			console.log(data)

			let produtosNomes = document.getElementsByClassName('rowNome')
			let categoriasNomes = document.getElementsByClassName('rowCat')


			$.each(data, function(i) {
				let opcaoSelecionada = data[i]['opcaoPromo']	//Nome do Produto Selecionado na promoção

				for (k in produtosNomes) {	//Varre todos nomes dos produtos da tabela
					let produtoAtual = produtosNomes[k].innerText //Nome do Produto atual do array da classe html

					console.log('Aqui!!')

					if (produtoAtual == opcaoSelecionada) { //Contem Promoção para o Nome do produto que está na tabela
						//console.log(`O ${k} contem o nome de produto igual a promoção ${i}`)

						let valorSemDesconto = document.getElementById(`valorRow${k}`).innerText

						valorSemDesconto = valorSemDesconto.replace('R$ ', '')
						valorSemDesconto = parseInt(valorSemDesconto)

						console.log('Aqui2!!')

						let porcentagemPromocao = data[i]['porcentPromo']
						let desconto = (valorSemDesconto * (porcentagemPromocao / 100))
						let valorComDesconto = (valorSemDesconto - (desconto))

						console.log(desconto)
						console.log(valorSemDesconto)
						console.log(valorComDesconto)

						console.log('Aqui 3!!')

						document.getElementById('span-precoBruto').innerHTML = `R$: ${valorSemDesconto}`
						document.getElementById('span-precoDesconto').innerHTML = `R$: ${desconto}`
						document.getElementById('span-precoTotal').innerHTML = `R$: ${valorComDesconto}`

					}

				}
			})

		}
	});
}





function funcaoRemover() {
	$("#jorge").remove();
}