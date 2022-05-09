package  models;
import javax.persistence.Entity;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Table(name="promo")
public class Promocao extends PanacheEntity{
	
	public Promocao() {
		super();
	}
	

	public Promocao(Long codPromo, String nomePromo, String porcentPromo) {
		super();
		this.codPromo = codPromo;
		this.nomePromo = nomePromo;
		this.porcentPromo = porcentPromo;
	}

	public Long codPromo;
	public String nomePromo;
	public String porcentPromo;
	
	
	public Long getCodPromo() {
		return codPromo;
	}
	
	public void setCodPromo(Long codPromo) {
		this.codPromo = codPromo;
	}


	public String getNomePromo() {
		return nomePromo;
	}


	public void setNomePromo(String nomePromo) {
		this.nomePromo = nomePromo;
	}


	public String getPorcentPromo() {
		return porcentPromo;
	}


	public void setPorcentPromo(String porcentPromo) {
		this.porcentPromo = porcentPromo;
	}
	
	
	
}

	
