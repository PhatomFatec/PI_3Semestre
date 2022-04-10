package resources;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import models.Produto;

@Path("/cadastroProduto")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)

public class ProdutoResource {
	@GET
	public List<Produto>searchAllProducts(){
		return Produto.listAll();
	}
	
	@POST
	@Transactional
	public void Cadastrar( Produto dto ){
		Produto p = new Produto();
		p.codProd = dto.codProd;
		p.nomeProd = dto.nomeProd;
		p.descProd = dto.descProd;
		p.categoriaProd = dto.categoriaProd;
		p.valorProd = dto.valorProd;
		System.out.println("imHere" +dto.nomeProd);
		p.persist();
		
	}

	@POST
	@Path("{id}")
	@Transactional 
	public void atualizar(@PathParam("id")Long id, Produto dto ){
			
		Optional <Produto> produtoup = Produto.findByIdOptional(id);
			if(produtoup.isPresent()) {
				Produto nomeProd = produtoup.get();
				nomeProd.codProd = dto.codProd;
				nomeProd.nomeProd = dto.nomeProd;
				nomeProd.descProd = dto.descProd;
				nomeProd.categoriaProd = dto.categoriaProd;
				nomeProd.valorProd = dto.valorProd;
				nomeProd.persist();
				}else {
				throw new NotFoundException();
			}
	}
	
	@DELETE
	@Path("{id}")
	@Transactional
	public void deletar(@PathParam("id")Long id){
		
		Optional <Produto> produtoup = Produto.findByIdOptional(id);
		
		produtoup.ifPresentOrElse(Produto::delete, () ->{
			throw new NotFoundException();
			});
		}
	 }
		
	

