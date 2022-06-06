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
var valores = 0;
var conterr = 5;
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
					<tr id="jorge${i}"><td><span>${data[i]["codProd"]} </td></span> 
					<td><span id="nomeRow$" class="rowNome"> ${data[i]["nomeProd"]} </td></span> 
					<td><span id="descRow$" class="rowDesc"> ${data[i]["descProd"]} </td></span> 
					<td><span id="catRow$" class="rowCat"> ${data[i]["categoria"]} </td></span> 
					<td><form>
  <div class="value-button" id="decrease" onclick="decreaseValue(${i})" value="Decrease Value">-</div>
  <input type="text" size="5" id="qntd${i}" value="${1}" readonly="true"/>
  <div class="value-button" id="increase" onclick="increaseValue(${i})" value="Increase Value">+</div>
</form>	</td></span> 
					<td><span id="valorRow${i}" class="rowValor">R$ ${data[i]["valorProd"]}  </td></span>
					<td><span id="descontoRow${i}" class="rowValor">R$ 0 </td></span>
					<td><span id="totRow${i}" class="rowTotal" > R$ ${data[i]["valorProd"] * 1}   </td></span>
					<td><button type="button" class="button red" onclick="funcaoRemover(${i})" id="btn-Remover$"><i class="material-icons">close</i></button></td></tr> 
				`);
					//console.log(" index  " + i + "  value  " + $(this).val());
				valores+=data[i]["valorProd"]
				}
				
			});

			if (items.length >= 1) {
				$("#cleiton").append(items);
				$("div").remove("#cartvazio");
				for (var c = 0; c < data.length; c++) {
					let desc = verificarPromocaoProduto(c);
					//desc = desc.replace('R$ ', '')
					//desc = parseInt(desc)
					document.getElementById('span-precoDesconto').innerHTML = "R$ " + desc
					document.getElementById('span-precoTotal').innerHTML = "R$" + valores
					if (desc >	0) {
						let y = document.getElementById('valorRow' + c).innerHTML
						y = y.replace('R$ ', '')
						y = parseInt(y)

						document.getElementById('descontoRow' + c).innerHTML = "R$" + desc
						document.getElementById('totRow' + c).innerHTML = "R$" + (y - desc)
					}
				}
				items = [];
				checked = [];
			}
			else if (items.length <= 0) {
				alert("Escolha ao menos um item !!")
			}


		}
	});
}

function reload(){
	location.reload();
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
 
function getPromo() {

	var retorno2 = [];
	$.ajax({
		url: "http://localhost:8080/cadastroPromocao",
		type: "GET",
		dataType: "json",
		data: "dado",
		async: false,

		success: function(data) {
			retorno2 = data;
			
		}

	});
	return retorno2;
}

function verificarCarrinho(){
	var retorno;
	$.ajax({
    url:    "http://localhost:8080/carrinho",
    type:   "GET",
    dataType:"json",
    data:   "dado",
    async: false,
	
    success: function( data ){
		retorno = data;
	
		 }
	
 });
	return retorno;
}

function verificarPromocaoProduto(i){
 
        let x = verificarCarrinho();
        let y = getPromo();
		//for(var j = 0; j<jsonzao.length;j++){
			//for(var g = 0; g<x.length;g++){
				console.log(i)
				console.log(x[1])		
		 if (y[i]["opcaoPromo"] == "produto") {			
			 if (y[i]["nomeCampo"] == x[i]["nomeProd"].toUpperCase()) {
				let test = parseInt(document.getElementById('qntd' + i).value)
				 if (test >= y[i]["quantidadeMin"]) {	
					 if (y[i]["porcentPromo"] != 0.0) {
						 let porcentagem = y[i]["porcentPromo"] / 100;
						 conterr+=(x[i]["valorProd"] * porcentagem)
						 let newValue =  (x[i]["valorProd"] * porcentagem)*document.getElementById('qntd' + i).value;
						 return  newValue;
					
					 }
					 else if (y[i]["quantidadeBonus"] != 0.0) {
						conterr += (y[i]["quantidadeBonus"] * x[i]["valorProd"])
						 return (y[i]["quantidadeBonus"] * x[i]["valorProd"]);
						  
					 }
				 } else {
					console.log("aqui 2")
					 return  0;
					 
				 }
			 }
			 else {
				console.log("aqui 1")
				 return  0;
				  
			 }
		 }
		// }
		 //}

}

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
        
        let contador = 0;
		 if (jsonzao[i]["opcaoPromo"] == "categoria") {
			contador += 1;
			 if (jsonzao[i]["nomeCampo"] == data[i]["nomeProd"]) {
				 if (contador >= jsonzao[i]["quantidadeMin"]) {
					 if (jsonzao[4]["porcentPromo"] != null) {
						 let porcentagem = jsonzao[i]["porcentPromo"] / 100;
						 let newValue = "R$ " + (data[i]["valorProd"] * porcentagem)*document.getElementById('qntd' + i).value;
						 retorno = newValue;
					 }
					 else if (jsonzao[0]["quantidadeBonus"] != null) {
						 retorno = "R$ " + (jsonzao[4]["quantidadeBonus"] * data[i]["valorProd"]);
					 }
				 } else {
					 retorno = "R$ " + 0;
				 }
			 }
			 else {
				 retorno = "R$ " + 0;
			 }
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
	let testPromo = verificarPromocaoProduto(i);
	console.log(testPromo)
	
	let y = document.getElementById('valorRow'+i).innerHTML
	y = y.replace('R$ ', '')
	y = parseInt(y)
	testPromo = parseInt(testPromo)
	let count = (y*=qnt)-testPromo
	console.log(conterr)

	document.getElementById('descontoRow' + i).innerHTML ="R$ "+ testPromo
	document.getElementById("totRow"+i).innerHTML="R$ " + count
	document.getElementById('span-precoDesconto').innerHTML = "R$ " + conterr
	document.getElementById('span-precoTotal').innerHTML = "R$ " + (valores - testPromo)
}

function decreaseValue(i) {
	var value = parseInt(document.getElementById('qntd'+i).value, 10);
	value = isNaN(value) ? 1 : value;
	value--;
	var qnt = document.getElementById('qntd'+i).value = value;
	if (qnt <=0 ){
		funcaoRemover(i);
	}

	let testPromo = verificarPromocaoProduto(i);
	let y = document.getElementById('valorRow'+i).innerHTML
	y = y.replace('R$ ', '')
	y = parseInt(y)
	let count = (y*=qnt)-testPromo
	document.getElementById('descontoRow' + i).innerHTML ="R$ "+ testPromo
	document.getElementById("totRow"+i).innerHTML="R$ " + count
	document.getElementById('span-precoDesconto').innerHTML = "R$ " + testPromo
	document.getElementById('span-precoTotal').innerHTML = "R$ " + (valores - testPromo)

	
}
function funcaoRemover(i) {
	$("#jorge"+i).remove();
}
