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
					let x = verificarPromocaoCategoria(i);
					x = x.replace('R$ ', '')
					x = parseInt(x)
					items.push(`
					<tr id="jorge${i}"><td><span>${data[i]["codProd"]} </td></span> 
					<td><span id="nomeRow$" class="rowNome"> ${data[i]["nomeProd"]} </td></span> 
					<td><span id="descRow$" class="rowDesc"> ${data[i]["descProd"]} </td></span> 
					<td><span id="catRow$" class="rowCat"> ${data[i]["categoria"]} </td></span> 
					<td><form>
  <div class="value-button" id="decrease" onclick="decreaseValue(${i})" value="Decrease Value">-</div>
  <input type="text" size="5" id="qntd${i}" value="${data[i]["quantidade"]}" readonly="true"/>
  <div class="value-button" id="increase" onclick="increaseValue(${i})" value="Increase Value">+</div>
</form>	</td></span> 
					<td><span id="valorRow${i}" class="rowValor">R$ ${data[i]["valorProd"]}  </td></span>
					<td><span id="descontoRow${i}" class="rowValor"> ${verificarPromocaoCategoria(i)}  </td></span>
					<td><span id="totRow${i}" class="rowTotal" > R$ ${data[i]["valorProd"] * data[i]["quantidade"] - x}   </td></span>
					<td><button type="button" class="button red" onclick="funcaoRemover(${i})" id="btn-Remover$"><i class="material-icons">close</i></button></td></tr> 
				`);
					//console.log(" index  " + i + "  value  " + $(this).val());

				}
			});

			if (items.length >= 1) {
				$("#cleiton").append(items);
				items = [];
				checkboxes = [];

			}
			else if (items.length <= 0) {
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
 

var jsonzao = [{
	"nomeCampo": "eletronicos",
	"nomePromo": "promocao celular",
	"opcaoPromo": "Categoria",
	"porcentPromo": "NULL",
	"quantidadeBonus": 60,
	"quantidadeMin": 4,
	"tipoPromocao": "DESCONTO EM CATEGORIA"
}]


function verificarPromocaoCategoria(i){	
	var retorno;
 $.ajax({
    url:    "http://localhost:8080/carrinho",
    type:   "GET",
    dataType:"json",
    data:   "dado",
    async: false,

    success: function( data ){
        retorno = data;           


	if (jsonzao[0]["nomeCampo"] == data[i]["categoria"]) {
		if (data[i]["quantidade"] >= jsonzao[0]["quantidadeMin"]) {
			console.log(data[i]["quantidade"])
			console.log(document.getElementById('qntd'+i))	
			if (jsonzao[0]["porcentPromo"] != "NULL") {
				retorno =  jsonzao[0]["porcentPromo"];
					
			}
			else if (jsonzao[0]["quantidadeBonus"] != "NULL") {
				 retorno = "R$ " + jsonzao[0]["quantidadeBonus"];
				
				
			}
		}else{
			console.log("aqui 1")
			retorno =  "R$ " + 0;
		}
	}
	else {
		console.log("aqui 2")
		retorno =  "R$ " + 0;
	}
		
    }
});
return retorno;
}

	

function increaseValue(i) {
	var value = parseInt(document.getElementById('qntd'+i).value, 10);
	value = isNaN(value) ? 1 : value;
	value++;
	var qnt = document.getElementById('qntd'+i).value = value;
	if (qnt <= 0) {
		alert("adcione ao menos um produto");
		qnt = 1;
	}
	$.ajax({
		url: "http://localhost:8080/cadastroProduto/"+(i+1),
		async: false,
		data: JSON.stringify(
			{
				"quantidade": qnt
			}
		),
		type: 'PUT',
		headers: {
			Accept: 'application/json;charset=utf-8',
			'Content-Type': 'application/json'
		},
		dataType: 'json'
		
	});


	let y = document.getElementById('valorRow'+i).innerHTML
	y = y.replace('R$ ', '')
	y = parseInt(y)
	let ddd = document.getElementById('descontoRow' + i).innerHTML
	ddd = ddd.replace('R$ ', '')
	ddd = parseInt(ddd)
	let count = (y*=qnt)-ddd
	document.getElementById("totRow"+i).innerHTML="R$" + count
	
	let testPromo = verificarPromocaoCategoria(i);
	if(testPromo){
		document.getElementById('descontoRow' + i).innerHTML = testPromo
	}
}

function decreaseValue(i) {
	var value = parseInt(document.getElementById('qntd'+i).value, 10);
	value = isNaN(value) ? 1 : value;
	value--;
	var qnt = document.getElementById('qntd'+i).value = value;
	if (qnt <=0 ){
		alert("adcione ao menos um produto");
		qnt = 1;
	}
	$.ajax({
		url: "http://localhost:8080/cadastroProduto/"+(i+1),
		async: false,
		data: JSON.stringify(
			{
				"quantidade": qnt
			}
		),
		type: 'PUT',
		headers: {
			Accept: 'application/json;charset=utf-8',
			'Content-Type': 'application/json'
		},
		dataType: 'json'
	});
	let y = document.getElementById('valorRow'+i).innerHTML
	y = y.replace('R$ ', '')
	y = parseInt(y)
	let ddd = document.getElementById('descontoRow' + i).innerHTML
	ddd = ddd.replace('R$ ', '')
	ddd = parseInt(ddd)
	console.log(ddd)
	let count = (y*=qnt)-ddd
	document.getElementById("totRow"+i).innerHTML="R$" + count 
	
	let testPromo = verificarPromocaoCategoria(i);
	if(testPromo){
		document.getElementById('descontoRow' + i).innerHTML = testPromo
	}
}



function funcaoRemover(i) {
	$("#jorge"+i).remove();
}
