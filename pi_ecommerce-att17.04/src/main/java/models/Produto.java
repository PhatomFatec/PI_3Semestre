package models;
import javax.persistence.Entity;
import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Produto extends PanacheEntity{
	
	public Produto() {
		super();
	}
	
	public long codProd;
	public String nomeProd;
	public String descProd;
	public String categoriaProd;
	public double valorProd;
	
}
