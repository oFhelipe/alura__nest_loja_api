import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { ProdutoImagemDTO } from './ImagemProduto.dto';
import { ProdutoCaracteristicaDTO } from './ProdutoCaracteristica.dto';

export class CriarProdutoDTO {
  //----------------

  @IsUUID(undefined, {
    message: 'Id do usuário inválido',
  })
  usuarioId: string;

  //----------------

  @IsString({
    message: 'Nome inválido',
  })
  @IsNotEmpty({
    message: 'Nome obrigatório',
  })
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
  valor: number;

  //----------------

  @IsInt({
    message: 'Quantidade disponível inválida',
  })
  @IsNotEmpty({
    message: 'Quantidade disponível obrigatória',
  })
  quantidadeDisponivel: number;

  //----------------

  @IsString({
    message: 'Descrição inválida',
  })
  @IsNotEmpty({
    message: 'Descrição obrigatória',
  })
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
  imagens: ProdutoImagemDTO[];

  //----------------

  @IsString({
    message: 'Categoria inválida',
  })
  @IsNotEmpty({
    message: 'Categoria obrigatória',
  })
  categoria: string;

  //----------------
}
