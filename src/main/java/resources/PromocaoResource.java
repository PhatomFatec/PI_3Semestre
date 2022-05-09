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
import models.Promocao;
import services.PromocaoService;

@Path("cadastroPromocao")
@Consumes(value = MediaType.APPLICATION_JSON)
@Produces(value = MediaType.APPLICATION_JSON)
public class PromocaoResource {
	
	@Inject
	private PromocaoService promocaoService;
	
	@POST
	public Response cadastrar(Promocao promocao) {
		promocaoService.cadastrar(promocao);
		return Response.status(Status.CREATED).build();

	}
	
	@PUT
	@Path("{id}")
	public Response atualizar(@PathParam("id")Long id,Promocao promocao) {
		promocao.id = id;
		promocaoService.atualizar(promocao, id);
		return Response.ok().build();
		}
	
	
	@GET
	public List<Produto>searchAllProducts(){
		return Produto.listAll();
	}
	
	@DELETE
	@Path("{id}")
	public Response deletar(@PathParam("id")Long id) {
		promocaoService.deletar(id);
		return Response.ok().build();
	}

}