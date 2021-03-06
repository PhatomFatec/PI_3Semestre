package models;

import javax.persistence.Entity;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Table(name = "produto")
public class Produto extends PanacheEntity {

	public Long codProd;
	public String nomeProd;
	public String descProd;
	public String categoria;
	public Double valorProd;
	public String statusProd;
	public Integer quantidade;

	public Produto() {
	}

	public Produto(Long codProd, String nomeProd, String descProd, String categoria, Double valorProd,
			String statusProd, Integer quantidade) {
		super();
		this.codProd = codProd;
		this.nomeProd = nomeProd;
		this.descProd = descProd;
		this.categoria = categoria;
		this.valorProd = valorProd;
		this.statusProd = statusProd;
		this.quantidade = quantidade;
	}

	public Long getCodProd() {
		return codProd;
	}

	public void setCodProd(Long codProd) {
		this.codProd = codProd;
	}

	public String getNomeProd() {
		return nomeProd;
	}

	public void setNomeProd(String nomeProd) {
		this.nomeProd = nomeProd;
	}

	public String getDescProd() {
		return descProd;
	}

	public void setDescProd(String descProd) {
		this.descProd = descProd;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public Double getValorProd() {
		return valorProd;
	}

	public void setValorProd(Double valorProd) {
		this.valorProd = valorProd;
	}

	public String getStatusProd() {
		return statusProd;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public void setStatusProd(String statusProd) {
		if (this.statusProd == null) {
			statusProd = "Ativo";
			this.statusProd = statusProd;
		} else {
			statusProd = "Inativo";
			this.statusProd = statusProd;
		}
	}

}
