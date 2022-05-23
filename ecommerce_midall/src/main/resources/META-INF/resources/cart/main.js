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

			var is_checked = false;
			var checkboxes = [];
			for (var i = 0; i < document.getElementsByTagName("input").length; i++) {
				if (document.getElementsByTagName("input")[i].checked) { checkboxes.push(i) }
			}
				console.log(checkboxes)
				
				$('input[type="checkbox"]').each(function() {
					if ($(this).is(":checked")) {
						is_checked = true;
						console.log("foi")
						
						for(var i = 0; i < checkboxes.length; i++){
							
						items.push(`
					<tr id="jorge"><td><span>${data[checkboxes[i]]["codProd"]} </td></span> 
					<td><span id="nomeRow$" class="rowNome"> ${data[checkboxes[i]]["nomeProd"]} </td></span> 
					<td><span id="descRow$" class="rowDesc"> ${data[checkboxes[i]]["descProd"]} </td></span> 
					<td><span id="catRow$" class="rowCat"> ${data[checkboxes[i]]["categoria"]} </td></span> 
					<td><button class="less" onclick="valores">-</button><input id="quantRow$" name="quantity" min="1" max="3" ><button class="more">+</button>	</td></span> 
					<td><span id="valorRow$" class="rowValor">R$ ${data[checkboxes[i]]["valorProd"]}  </td></span>
					<td><span id="valorRow$" class="rowValor">R$ ${data[checkboxes[i]]["valorProd"]}  </td></span>
					<td><button type="button" class="button red" onclick="funcaoRemover()" id="btn-Remover$"><i class="material-icons">close</i></button></td></tr> 
				`);
							
			
}
					}
		
			});
			if(items.length >= 1){
				items.length = checkboxes.length
				$("#cleiton").append(items);
				items = [];
				checkboxes = [];
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

function valores(){
	$(document).ready(function(){
    $( "#quantRow$" ).prop( "disabled", true );
    var nivel = 0;
    $(".more").on('click', function(){  
          nivel++; 
    		  $("#level").val(nivel);    
    });
    
    $(".less").on('click', function(){  
          nivel--; 
    		  $("#level").val(nivel);    
    });
    
});

}
function funcaoRemover() {
	$("#jorge").remove();
}