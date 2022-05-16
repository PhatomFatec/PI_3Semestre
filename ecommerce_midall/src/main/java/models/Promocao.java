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
	
	

	public Promocao(String nomePromo, String opcaoPromo, Double porcentPromo) {
		super();
		//this.codPromo = codPromo;
		this.nomePromo = nomePromo;
		this.opcaoPromo = opcaoPromo;
		this.porcentPromo = porcentPromo;
		 
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

	
