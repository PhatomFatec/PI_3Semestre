package models;

import javax.persistence.Entity;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Table(name = "historicoVendas")
public class HistoricoVendas extends PanacheEntity {


	public String nomeVenda;
	public String descVenda;
	public String catVenda;
	public Integer quantVenda;
	public Double valorVenda;


	public HistoricoVendas() {
	}


	public HistoricoVendas(String nomeVenda, String descVenda, String catVenda, Integer quantVenda, Double valorVenda) {
		super();
		this.nomeVenda = nomeVenda;
		this.descVenda = descVenda;
		this.catVenda = catVenda;
		this.quantVenda = quantVenda;
		this.valorVenda = valorVenda;
	}


	public String getNomeVenda() {
		return nomeVenda;
	}


	public void setNomeVenda(String nomeVenda) {
		this.nomeVenda = nomeVenda;
	}


	public String getDescVenda() {
		return descVenda;
	}


	public void setDescVenda(String descVenda) {
		this.descVenda = descVenda;
	}


	public String getCatVenda() {
		return catVenda;
	}


	public void setCatVenda(String catVenda) {
		this.catVenda = catVenda;
	}


	public Integer getQuantVenda() {
		return quantVenda;
	}


	public void setQuantVenda(Integer quantVenda) {
		this.quantVenda = quantVenda;
	}


	public Double getValorVenda() {
		return valorVenda;
	}


	public void setValorVenda(Double valorVenda) {
		this.valorVenda = valorVenda;
	}


}
