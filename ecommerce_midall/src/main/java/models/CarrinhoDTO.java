package models;

import javax.validation.constraints.NotNull;

public class CarrinhoDTO {
	
	@NotNull
	public Long codPed;
	
	public Integer quantPed;

}
