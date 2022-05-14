package resources;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import models.HistoricoVendas;

@Path("HistoricoVendas")
@Consumes(value = MediaType.APPLICATION_JSON)
@Produces(value = MediaType.APPLICATION_JSON)

public class HistoricoVendasResource {
	
		
		@POST
		@Transactional
		public void Cadastrar( HistoricoVendas dto ){
			HistoricoVendas hv = new HistoricoVendas();
			hv.nomeVenda = dto.nomeVenda;
			hv.descVenda = dto.descVenda;
			hv.catVenda = dto.catVenda;
			hv.quantVenda = dto.quantVenda;
			hv.valorVenda = dto.valorVenda;
			hv.persist();
			
		}

}