package resources;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import models.Carrinho;
import models.Produto;
import services.CarrinhoService;

@Path("/carrinho")
@Consumes(value = MediaType.APPLICATION_JSON)
@Produces(value = MediaType.APPLICATION_JSON)

public class CarrinhoResource {
	
	@Inject
	private CarrinhoService carrinhoService;
	
	@GET
	public List<Produto>searchAllProducts(){
		return Produto.listAll();
	}
	
	@POST
	public Response cadastrar(Carrinho carrinho) {
		carrinhoService.cadastrar(carrinho);
		return Response.status(Status.CREATED).build();
	}
		
		
}