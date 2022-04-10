//Ativa Modal ao clicar no botão "Cadastrar Produto"
const openModal = () => document.getElementById('modal')
	.classList.add('active')

const closeModal = () => document.getElementById('modal')
	.classList.remove('active')

document.getElementById('cadastrarCliente')
	.addEventListener('click', openModal)

document.getElementById('modalClose')
	.addEventListener('click', closeModal)



//Evita de inserir numero negativo com "-". 

window.onload = function() {
	document.getElementById('modal-preco').addEventListener('keydown', function(event) {
		if (!Math.sign(event.key)) {
			event.preventDefault();
		}
	});
}



//Função disparada ao clicar no botão de "Cadastrar" do modal
function funcaoSalvar() {
	let nomeProduto = document.getElementById('modal-nome').value;
	let descProduto = document.getElementById('modal-desc').value;
	let categoriaProduto = document.getElementById('modal-categoria').value;
	let precoProduto = document.getElementById('modal-preco').value;

	let objs = {
		nomeProduto1: nomeProduto,
		descProduto1: descProduto,
		categoriaProduto1: categoriaProduto,
		precoProduto1: precoProduto
	}

	fetch("http://localhost:8080/cadastroProduto", {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(objs)
	})
		.then((response) => {
			console.log("Sucesso!")
			console.log(response)
		});

}






	function funcaoCancelar() {
		window.location.href = "http://localhost:8080/";
	}

