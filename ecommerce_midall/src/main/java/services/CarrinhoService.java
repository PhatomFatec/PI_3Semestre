package services;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

import models.Carrinho;
import repositories.CarrinhoRepository;

@Transactional
@ApplicationScoped
public class CarrinhoService {

	@Inject
	private CarrinhoRepository carrinhoRepository;

	public Carrinho cadastrar(Carrinho carrinho) {
		return carrinhoRepository.cadastrar(carrinho);
	}


}
