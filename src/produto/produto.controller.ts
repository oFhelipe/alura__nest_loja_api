import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriarProdutoDTO } from './dto/CriarProduto.dto';
import { AtualizaProdutoDTO } from './dto/AtualizaProduto.dto';
import { ProdutoEntity } from './produto.entity';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async criar(@Body() dadosDoProduto: CriarProdutoDTO) {
    const novoProduto = new ProdutoEntity(dadosDoProduto);
    this.produtoRepository.salvar(novoProduto);
    return {
      produto: novoProduto,
      message: 'Usuario criado com sucesso',
    };
  }

  @Get()
  async listar() {
    return this.produtoRepository.listarTodos();
  }

  @Put('/:id')
  async editar(@Param('id') id: string, novosDados: AtualizaProdutoDTO) {
    const produtoAtualizado = await this.produtoRepository.atualiza(
      id,
      novosDados,
    );
    return {
      produto: produtoAtualizado,
      message: 'Usuario atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async deletar(@Param('id') id: string) {
    await this.produtoRepository.deletar(id);
    return {
      message: 'Usuario deletado com sucesso',
    };
  }
}
