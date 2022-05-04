package models;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Carrinho extends PanacheEntity{
	public long codPed;
	@ManyToOne
	public Produto produto;
	public int quantPed;
	
	public Carrinho() {
	}
	
	public Carrinho(long codPed, Produto produto, int quantPed) {
		this.codPed = codPed;
		this.produto = produto;
		this.quantPed = quantPed;
	}
	
	
}
