package resources;

import java.util.List;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import models.Carrinho;
import models.CarrinhoDAO;
import models.Produto;


@Path("/carrinho")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)

public class CarrinhoResource {
	
	@GET
	public List<Produto>searchAllProducts(){
		return Produto.listAll();
	}
	
	@POST
	@Transactional
	public void persist(Carrinho dto) {
		CarrinhoDAO c = new CarrinhoDAO();
		c.Escolher(dto);
	}
		
		
}