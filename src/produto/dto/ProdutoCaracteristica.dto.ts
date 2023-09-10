import { IsString } from 'class-validator';

export class ProdutoCaracteristicaDTO {
  //----------------

  @IsString({
    message: 'Nome com formato inválido',
  })
  nome: string;

  //----------------

  @IsString({
    message: 'Descrição com formato inválido',
  })
  descricao: string;

  //----------------
}
