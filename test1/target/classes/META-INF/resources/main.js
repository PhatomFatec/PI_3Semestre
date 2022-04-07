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
  
        window.onload = function()
        {
            document.getElementById('modal-preco').addEventListener('keydown', function(event)
            {
                if (!Math.sign(event.key))
                {
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
            "nomeProduto1": nomeProduto,
            "descProduto1": descProduto,
            "categoriaProduto1": categoriaProduto,
            "precoProduto1": precoProduto,
        }
    
    let valoresJSON = JSON.stringify(objs)

    console.log(objs)
    console.log(typeof(objs))

    console.log(typeof(valoresJSON))
    console.log((valoresJSON))
 
}
    
function funcaoCancelar() {
	window.location.href = "http://localhost:8080/";
}
    
    