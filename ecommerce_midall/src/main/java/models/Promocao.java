package  models;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
	@ManyToOne
	@JoinColumn(name="codTipoPromocao")
	public TipoPromocao tipopromocao;
	
	

	public Promocao(String nomePromo, String opcaoPromo, Double porcentPromo, TipoPromocao tipopromocao) {
		super();
		//this.codPromo = codPromo;
		this.nomePromo = nomePromo;
		this.opcaoPromo = opcaoPromo;
		this.porcentPromo = porcentPromo;
		this.tipopromocao.setCodTipoPromo(id);
		 
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


	public TipoPromocao getTipopromocao() {
		return tipopromocao;
	}


	public void setTipopromocao(TipoPromocao tipopromocao) {
		this.tipopromocao = tipopromocao;
	}
	
	
		
}

	
