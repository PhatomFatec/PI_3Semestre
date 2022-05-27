package models;

import javax.persistence.Entity;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Table(name = "TipoPromocao")
public class TipoPromocao extends PanacheEntity {

	public Long codTipoPromo;
	public String descTipoPromo;
	
	
	
	
	public TipoPromocao() {
	}
	
	public TipoPromocao(Long codTipoPromo, String descTipoPromo) {
		super();
		this.codTipoPromo = codTipoPromo;
		this.descTipoPromo = descTipoPromo;
	}
	
	

	public Long getCodTipoPromo() {
		return codTipoPromo;
	}

	public void setCodTipoPromo(Long codTipoPromo) {
		this.codTipoPromo = codTipoPromo;
	}

	public String getDescTipoPromo() {
		return descTipoPromo;
	}

	public void setDescTipoPromo(String descTipoPromo) {
		this.descTipoPromo = descTipoPromo;
	}
	
	
	

}
