package models;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Table(name="carrinho")
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


	public long getCodPed() {
		return codPed;
	}

	public void setCodPed(long codPed) {
		this.codPed = codPed;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

	public int getQuantPed() {
		return quantPed;
	}

	public void setQuantPed(int quantPed) {
		this.quantPed = quantPed;
	}
	
	
}
