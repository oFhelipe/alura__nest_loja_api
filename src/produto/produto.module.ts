import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { ProdutoRepository } from './produto.repository';

@Module({
  providers: [ProdutoRepository],
  controllers: [ProdutoController],
})
export class ProdutoModule {}
