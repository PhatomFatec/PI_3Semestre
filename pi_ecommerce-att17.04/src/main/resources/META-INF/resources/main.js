 	//Ativa Modal ao clicar no botão "Cadastrar Produto"
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




//Função disparada ao clicar no botão de "Cadastrar" do modal
function funcaoSalvar() {
	let codigoProduto = document.getElementById('modal-codigo').value;
	let nomeProduto = document.getElementById('modal-nome').value;
	let descProduto = document.getElementById('modal-desc').value;
	let categoriaProduto = document.getElementById('modal-categoria').value;
	let precoProduto = document.getElementById('modal-preco').value;

 	$(document).ready(function() {

		$.ajax({
			url: "http://localhost:8080/cadastroProduto",
			async: false,
			data: JSON.stringify(
				{
					"id": 0,
					"codProd": codigoProduto,
					"nomeProd": nomeProduto,
					"descProd": descProduto,
					"categoriaProd": categoriaProduto,
					"valorProd": precoProduto
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



	//Envia para coluna
	document.getElementById('colunaCodigo').innerText = codigoProduto
	document.getElementById('colunaNome').innerText = nomeProduto
	document.getElementById('colunaDescricao').innerText = descProduto
	document.getElementById('colunaCategoria').innerText = categoriaProduto
	document.getElementById('colunaPreco').innerText = precoProduto

}

