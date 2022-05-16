package models;

import javax.validation.constraints.NotNull;

public class ProdutoDTO {
	@NotNull
	public Long codProd;
	
	@NotNull
	public String nomeProd;
	
	
	public String descProd;
	public String categoria;
	
	@NotNull
	public Double valorProd;
	
	public String statusProd;
}
