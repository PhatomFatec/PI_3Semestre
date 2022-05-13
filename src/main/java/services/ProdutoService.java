package services;

import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

import models.Produto;
import repositories.ProdutoRepository;

@Transactional
@ApplicationScoped
public class ProdutoService {
	
	@Inject 
	private ProdutoRepository produtoRepository;
	
	public Produto cadastrar (Produto produto) {
		return produtoRepository.cadastrar(produto);
	}


	
	public Produto atualizar (Produto produto, Long id){
		Optional <Produto> produtoBD = Produto.findByIdOptional(id);
		if(produtoBD.isPresent()) {
			Produto nomeProd = produtoBD.get();
			nomeProd.descProd = produto.descProd;
			nomeProd.valorProd = produto.valorProd;
			
			
		
		}
		return produto; 
		}
	
	public void deletar(Long id) {
		produtoRepository.deletar(id);
		
	}
	
	//public conta;
}



//desconto = y - x/100 * y;


