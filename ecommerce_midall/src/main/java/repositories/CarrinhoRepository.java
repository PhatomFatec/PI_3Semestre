package repositories;

import javax.enterprise.context.ApplicationScoped;

import models.Carrinho;

@ApplicationScoped
public class CarrinhoRepository {

	public Carrinho cadastrar(Carrinho carrinho) {
		Carrinho p = new Carrinho(carrinho.codPed, carrinho.produto, carrinho.quantPed);
		p.persist();
		return p;
	}

}