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
			var checked = [];


			$("input[type='checkbox']").each(function(i) {
				if (this.checked) {
					checked.push(parseInt($(this).val()));
					items.push(`
					<tr id="jorge"><td><span>${data[i]["codProd"]} </td></span> 
					<td><span id="nomeRow$" class="rowNome"> ${data[i]["nomeProd"]} </td></span> 
					<td><span id="descRow$" class="rowDesc"> ${data[i]["descProd"]} </td></span> 
					<td><span id="catRow$" class="rowCat"> ${data[i]["categoria"]} </td></span> 
					<td><form>
  <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
  <input type="number" id="qntd" value="1" />
  <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
</form>	</td></span> 
					<td><span id="valorRow$" class="rowValor">R$ ${data[i]["valorProd"]}  </td></span>
					<td><span id="totRow$$" class="rowTotal">R$ ${data[i]["valorProd"] * 10}  </td></span>
					<td><button type="button" class="button red" onclick="funcaoRemover()" id="btn-Remover$"><i class="material-icons">close</i></button></td></tr> 
				`);
					console.log("The index is " + i + " and the value is " + $(this).val());
				}
			});	

			if(items.length >= 1) {
				$("#cleiton").append(items);
				items = [];
				checkboxes = [];
				
			}
			else if(items.length <= 0){
				alert("Escolha ao menos um item !!")
			}


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

function increaseValue() {
	var value = parseInt(document.getElementById('qntd').value, 10);
	value = isNaN(value) ? 1 : value;
	value++;
	document.getElementById('qntd').value = value;
}

function decreaseValue() {
	var value = parseInt(document.getElementById('qntd').value, 10);
	value = isNaN(value) ? 1 : value;
	value < 1 ? value = 1 : '';
	value--;
	document.getElementById('qntd').value = value;
}
function funcaoRemover() {
	$("#jorge").remove();
}