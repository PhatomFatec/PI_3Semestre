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
}
