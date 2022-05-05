package resources;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import models.Produto;
import services.ProdutoService;

@Path("cadastroProduto")
@Consumes(value = MediaType.APPLICATION_JSON)
@Produces(value = MediaType.APPLICATION_JSON)
public class ProdutoResource {
	
	@Inject
	private ProdutoService produtoService;
	
	@POST
	public Response cadastrar(Produto produto) {
		produtoService.cadastrar(produto);
		return Response.status(Status.CREATED).build();

	}
	
	@PUT
	@Path("{id}")
	public Response atualizar(@PathParam("id")Long id,Produto produto) {
		produto.id = id;
		produtoService.atualizar(produto, id);
		return Response.ok().build();
		}
	
	
	@GET
	public List<Produto>searchAllProducts(){
		return Produto.listAll();
	}
	
	@DELETE
	@Path("{id}")
	public Response deletar(@PathParam("id")Long id) {
		produtoService.deletar(id);
		return Response.ok().build();
	}

}