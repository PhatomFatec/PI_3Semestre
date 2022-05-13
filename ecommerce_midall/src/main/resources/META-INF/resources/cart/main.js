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

function listarProduto() {

	$.ajax({
		type: "GET",
		url: "http://localhost:8080/carrinho",
		data: 'teste',
		cache: false,
		success: function(data)  {
			console.log('Get Realizado!')
			console.log(data)

			document.getElementById('span-nome').innerText = data[0]['nomeProd']
			document.getElementById('span-categoria').innerText = data[0]['categoria']
			document.getElementById('span-preco').innerText = "R$" + data[0]['valorProd']

			document.getElementById('span-nome1').innerText = data[1]['nomeProd']
			document.getElementById('span-categoria1').innerText = data[1]['categoria']
			document.getElementById('span-preco1').innerText = "R$" + data[1]['valorProd']
			
			document.getElementById('span-nome2').innerText = data[2]['nomeProd']
			document.getElementById('span-categoria2').innerText = data[2]['categoria']
			document.getElementById('span-preco2').innerText = "R$" + data[2]['valorProd']

			document.getElementById('span-nome3').innerText = data[3]['nomeProd']
			document.getElementById('span-categoria3').innerText = data[3]['categoria']
			document.getElementById('span-preco3').innerText = "R$" + data[3]['valorProd']

			document.getElementById('span-nome4').innerText = data[4]['nomeProd']
			document.getElementById('span-categoria4').innerText = data[4]['categoria']
			document.getElementById('span-preco4').innerText = "R$" + data[4]['valorProd']

		}

	});
}