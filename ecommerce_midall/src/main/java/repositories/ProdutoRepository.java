package repositories;

import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;

import models.Produto;
@ApplicationScoped
public class ProdutoRepository {
	
	public Produto cadastrar( Produto produto){
		Produto p = new Produto(produto.codProd, produto.nomeProd, produto.descProd,produto.categoria, produto.valorProd, produto.statusProd, produto.quantidade);
		p.persist();
		return p;
		}
		

	public Optional<Produto> consultar (Long codProd){
		return Produto.findByIdOptional(codProd);
	}
	public void deletar(Long codProd) {
		this.consultar(codProd).ifPresent(Produto::delete);		
	}
}
