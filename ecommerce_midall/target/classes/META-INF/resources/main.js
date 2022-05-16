//Ativa Modal ao clicar no botão "Cadastrar Produto"
	 const openModal = () => document.getElementById('modal').classList.add('active')
	 const closeModal = () => document.getElementById('modal').classList.remove('active')
	 document.getElementById('cadastrarCliente').addEventListener('click', openModal)
	 document.getElementById('modalClose').addEventListener('click', closeModal)
	 
	//Ativa Modal ao clicar no botão "Alterar Produto"
	 const openModalEdit = () => document.getElementById('modal2').classList.add('active')
	 const closeModalEdit = () => document.getElementById('modal2').classList.remove('active')
	 document.getElementById('btn-Editar').addEventListener('click', openModalEdit)
	 document.getElementById('btn-Editar2').addEventListener('click', openModalEdit)
	 document.getElementById('btn-Editar3').addEventListener('click', openModalEdit)
 	 document.getElementById('btn-Editar4').addEventListener('click', openModalEdit)
	 document.getElementById('btn-Editar5').addEventListener('click', openModalEdit)
 	 document.getElementById('btn-Editar6').addEventListener('click', openModalEdit)
	 document.getElementById('btn-Editar7').addEventListener('click', openModalEdit)
 	 document.getElementById('btn-Editar8').addEventListener('click', openModalEdit)
	 document.getElementById('btn-Editar9').addEventListener('click', openModalEdit)
	 document.getElementById('btn-Editar10').addEventListener('click', openModalEdit)
	 document.getElementById('modalClose2').addEventListener('click', closeModalEdit)
	 

	 
	 //Função disparada ao clicar no botão de "Cadastrar" do modal
	 function funcaoSalvar() {
		 let codigoProduto = document.getElementById('modal-codigo').value;
		 let nomeProduto = document.getElementById('modal-nome').value;
		 let descProduto = document.getElementById('modal-desc').value;
		 let categoriaProduto = document.getElementById('modal-categoria').value;
		 let precoProduto = document.getElementById('modal-preco').value;
		let statusProduto = document.getElementById('modal-status').value;
	 
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
						 "categoria": categoriaProduto,
						 "valorProd": precoProduto,
						"statusProd": statusProduto
					 }
				 ),
				 type: 'POST',
				 headers: {
					 Accept: 'application/json;charset=utf-8',
					 'Content-Type': 'application/json'
				 },
				 dataType: 'json'
			 });
			 alert("Inserção Realizada!")
		 }); 
	 
	 
	 }
	 

	 function listarProduto() {

		console.log('aqui')
		 
		 $.ajax({
		   type: "GET",
		   url: "http://localhost:8080/cadastroProduto",
		   data: 'teste',
		   cache: false,
		   success: function(data){
			 console.log('Get Realizado!')
			 console.log(data);
			 
			 var items = [];

			 $.each(data, function(i){
					
				items.push(`<tr><td><span> ${this.codProd} </td></span> <td><span> ${this.nomeProd} </td></span> <td><span> ${this.descProd} </td></span> <td><span> ${this.categoria} </td></span> <td><span> ${this.valorProd} </td></span> <td><span> ${this.statusProd} </td></span> <td><td> <button type="button" class="button blue" onclick="" id="btn-Editar2">Alterar</button>
                        <button type="button" class="button red" onclick="funcaoRemover()" id="btn-Remover">Excluir</button> </td> </tr>`)
				
				//items.push("<tr><td><spam>" + this.codProd + "</spam></td><td><spam>" + this.nomeProd + "</spam></td><td><spam>" + this.descProd + "</spam></td><td><spam>" +this.categoria+ "</spam></td><td><spam>" +this.valorProd+ "</spam></td><td><spam>"+ this.statusProd + "</spam></td>");
			});
			
			
			$("#abc").append(items);
		   }
		 });
		 
	 }