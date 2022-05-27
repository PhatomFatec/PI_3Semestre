package repositories;

import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;

import models.Promocao;
@ApplicationScoped
public class PromocaoRepository {
	
	public Promocao cadastrar( Promocao promocao){
		Promocao p = new Promocao(promocao.nomePromo, promocao.opcaoPromo, promocao.porcentPromo, promocao.tipopromocao);
		p.persist();
		return p;
		}
		

	public Optional<Promocao> consultar (Long codProd){
		return Promocao.findByIdOptional(codProd);
	}
	public void deletar(Long codProd) {
		this.consultar(codProd).ifPresent(Promocao::delete);		
	}
}
