import { Injectable } from '@nestjs/common';
import { ProdutoEntity } from './produto.entity';

@Injectable()
export class ProdutoRepository {
  private produtos: ProdutoEntity[] = [];

  async salvar(produto: ProdutoEntity) {
    this.produtos.push(produto);
  }

  async listarTodos() {
    return this.produtos;
  }

  private buscaPorId(id: string) {
    const possivelProduto = this.produtos.find((produto) => produto.id === id);

    if (!possivelProduto) {
      throw new Error('Produto não existe');
    }

    return possivelProduto;
  }

  async atualiza(id: string, dadosProduto: Partial<ProdutoEntity>) {
    const dadosNaoAtualizaveis = ['id', 'usuarioId'];
    const produto = this.buscaPorId(id);
    Object.entries(dadosProduto).forEach(([chave, valor]) => {
      if (dadosNaoAtualizaveis.includes(chave)) {
        return;
      }
      produto[chave] = valor;
    });

    return produto;
  }

  async deletar(id: string) {
    this.produtos = this.produtos.filter((produto) => produto.id !== id);
  }
}
