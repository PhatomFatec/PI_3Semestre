package models;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

public class CarrinhoDAO extends PanacheEntity {

	public void Escolher(Carrinho dto) {
		Carrinho itens = new Carrinho(dto.codPed, dto.produto, dto.quantPed);
		itens.persist();
	}

}
