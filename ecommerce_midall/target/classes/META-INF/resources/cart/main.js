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

	//let nomeProduto = document.getElementById('btn-Salvar').value;
	//document.getElementById('colunaNome').innerText = nomeProduto
	document.getElementById('colunaNome').innerText = "Calça Jeans"
	document.getElementById('colunaCodigo').innerText = "001002003"
	document.getElementById('colunaDescricao').innerText = "Tamanho M | Cor: Preta"
	document.getElementById('colunaCategoria').innerText = "Moda"
	document.getElementById('colunaPreco').innerText = "R$79.00"
	document.getElementById('colunaQuantidade').value = "1"
	

	document.getElementById('span-precoBruto').innerText = "R$79.00"
	document.getElementById('span-precoDesconto').innerText = "R$10.00"
	document.getElementById('span-precoTotal').innerText = "R$69.00"
}


function funcaoListarGET() {
	

	document.getElementById('span-codigo').innerText = "001002003"
	document.getElementById('span-nome').innerText = "Calça Jeans"
	document.getElementById('span-descricao').innerText = "Tamanho M | Cor: Preta "
	document.getElementById('span-categoria').innerText = "Moda"
	document.getElementById('span-quantidade').innerText = "1"
	document.getElementById('span-preco').innerText = "R$79.00"
	
	



/* 		$(document).ready(function() {

		$.ajax({
			url: "http://localhost:8080/cadastroProduto",
			type: 'GET',
			headers: {
				Accept: 'application/json;charset=utf-8',
				'Content-Type': 'application/json'
			},
			dataType: 'json',
		sucess: function (resposta) {
			console.log(resposta)
			return resposta
		}
		});
		console.log("Função Realizada!")
	}); 
	
	let blob = new Blob([resposta],
	{
		type: "text/plain;charset-utf-8"
	});
	
	saveAs(blob, "text" + ".txt"); */

}; 

function funcaoFinalizarCompra() {
	alert(`Compra foi realizada com Sucesso!!`)
}
