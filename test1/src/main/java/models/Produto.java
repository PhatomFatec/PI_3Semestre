package models;
import javax.persistence.Entity;
import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Produto extends PanacheEntity{
	
	public long codProd;
	public String nomeProd;
	public String descProd;
	public int estoqueProd;
	public String categoriaProd;
	public double valorProd;
	
}
