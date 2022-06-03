package  models;
import javax.persistence.Entity;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Table(name="promocao")
public class Promocao extends PanacheEntity{
	
	public Promocao() {
		super();
	}
	

	public String nomePromo;
	public String opcaoPromo;
	public Double porcentPromo;
	public String tipoPromocao;
	public Integer quantidadeMin; //x
	public Integer quantidadeBonus; //y
	public String nomeCampo;
	
	

	public Promocao(String nomePromo, String opcaoPromo, Double porcentPromo, String tipoPromocao, Integer quantidadeMin, Integer quantidadeBonus, String nomeCampo) {
		super();
		this.nomePromo = nomePromo;
		this.opcaoPromo = opcaoPromo;
		this.porcentPromo = porcentPromo;
		this.tipoPromocao = tipoPromocao;
		this.quantidadeMin = quantidadeMin;
		this.quantidadeBonus = quantidadeBonus;
		this.nomeCampo = nomeCampo;
	}


	public String getTipoPromocao() {
		return this.tipoPromocao;
	}

	public void setTipoPromocao(String tipoPromocao) {
		this.tipoPromocao = tipoPromocao;
	}

	public Integer getQuantidadeMin() {
		return this.quantidadeMin;
	}

	public void setQuantidadeMin(Integer quantidadeMin) {
		this.quantidadeMin = quantidadeMin;
	}

	public Integer getQuantidadeBonus() {
		return this.quantidadeBonus;
	}

	public void setQuantidadeBonus(Integer quantidadeBonus) {
		this.quantidadeBonus = quantidadeBonus;
	}

	public String getNomePromo() {
		return nomePromo;
	}




	public void setNomePromo(String nomePromo) {
		this.nomePromo = nomePromo;
	}




	public String getOpcaoPromo() {
		return opcaoPromo;
	}




	public void setOpcaoPromo(String opcaoPromo) {
		this.opcaoPromo = opcaoPromo;
	}




	public Double getPorcentPromo() {
		return porcentPromo;
	}




	public void setPorcentPromo(Double porcentPromo) {
		this.porcentPromo = porcentPromo;
	}
		
}

	
