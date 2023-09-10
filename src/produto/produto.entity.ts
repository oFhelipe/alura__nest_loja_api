import { v4 as uuid } from 'uuid';
import { CriarProdutoDTO } from './dto/CriarProduto.dto';

export class ProdutoCaracteristica {
  nome: string;
  descricao: string;
}

export class ProdutoImagem {
  url: string;
  descricao: string;
}

export class ProdutoEntity {
  id: string;
  usuarioId: string;
  nome: string;
  valor: number;
  quantidadeDisponivel: number;
  descricao: string;
  caracteristicas: ProdutoCaracteristica[];
  imagens: ProdutoImagem[];
  categoria: string;

  constructor(args: CriarProdutoDTO) {
    this.id = uuid();
    this.usuarioId = args.usuarioId;
    this.nome = args.nome;
    this.valor = args.valor;
    this.quantidadeDisponivel = args.quantidadeDisponivel;
    this.descricao = args.descricao;
    this.caracteristicas = args.caracteristicas;
    this.imagens = args.imagens;
    this.categoria = args.categoria;
  }
}
