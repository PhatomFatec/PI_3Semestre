package repositories;

import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;

import models.Carrinho;
import models.Produto;

@ApplicationScoped
public class CarrinhoRepository {

	public Carrinho cadastrar(Carrinho carrinho) {
		Carrinho p = new Carrinho(carrinho.codPed, carrinho.produto, carrinho.quantPed);
		p.persist();
		return p;
	}


	public Optional<Produto> consultar (Long codProd){
		return Produto.findByIdOptional(codProd);
}
}
