package services;

import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

import models.Promocao;
import repositories.PromocaoRepository;

@Transactional
@ApplicationScoped
public class PromocaoService {
	
	@Inject 
	private PromocaoRepository promocaoRepository;
	
	public Promocao cadastrar (Promocao promocao) {
		return promocaoRepository.cadastrar(promocao);
	}


	
	public Promocao atualizar (Promocao promocao, Long id){
		Optional <Promocao> promocaoBD = Promocao.findByIdOptional(id);
		if(promocaoBD.isPresent()) {
			Promocao nomePromo = promocaoBD.get();
			nomePromo.porcentPromo = promocao.porcentPromo;
		}
		return promocao;
		}
	
	public void deletar(Long id) {
		promocaoRepository.deletar(id);
		
	}
	
	//public conta;
}



//desconto = y - x/100 * y;



