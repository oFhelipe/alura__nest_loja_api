import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ProdutoImagemDTO } from './ImagemProduto.dto';
import { ProdutoCaracteristicaDTO } from './ProdutoCaracteristica.dto';

export class AtualizaProdutoDTO {
  //----------------

  @IsString({
    message: 'Nome inválido',
  })
  @IsNotEmpty({
    message: 'Nome obrigatório',
  })
  @IsOptional()
  nome: string;

  //----------------

  @IsNumber(
    {
      maxDecimalPlaces: 2,
    },
    {
      message: 'Valor inválido',
    },
  )
  @IsNotEmpty({
    message: 'Valor obrigatório',
  })
  @IsOptional()
  valor: number;

  //----------------

  @IsInt({
    message: 'Quantidade disponível inválida',
  })
  @IsNotEmpty({
    message: 'Quantidade disponível obrigatória',
  })
  @IsOptional()
  quantidadeDisponivel: number;

  //----------------

  @IsString({
    message: 'Descrição inválida',
  })
  @IsNotEmpty({
    message: 'Descrição obrigatória',
  })
  @IsOptional()
  descricao: string;

  //----------------

  @IsArray({
    message: 'Caracteristica inválida',
  })
  @IsNotEmpty({
    message: 'Caracteristica obrigatória',
  })
  @ValidateNested({
    each: true,
  })
  @Type(() => ProdutoCaracteristicaDTO)
  @IsOptional()
  caracteristicas: ProdutoCaracteristicaDTO[];

  //----------------

  @IsArray({
    message: 'Imagem inválida',
  })
  @IsNotEmpty({
    message: 'Imagens obrigatória',
  })
  @ValidateNested({
    each: true,
  })
  @Type(() => ProdutoImagemDTO)
  @IsOptional()
  imagens: ProdutoImagemDTO[];

  //----------------

  @IsString({
    message: 'Categoria inválida',
  })
  @IsNotEmpty({
    message: 'Categoria obrigatória',
  })
  @IsOptional()
  categoria: string;

  //----------------
}
