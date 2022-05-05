package repositories;



import javax.enterprise.context.RequestScoped;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import models.Carrinho;

public class CarrinhoDAO extends PanacheEntity {
	@RequestScoped
	public void Escolher(Carrinho dto) {
		Carrinho itens = new Carrinho(dto.codPed, dto.produto, dto.quantPed);
		itens.persist();
	}

}