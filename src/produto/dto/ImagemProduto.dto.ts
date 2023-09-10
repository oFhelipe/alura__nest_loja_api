import { IsString } from 'class-validator';

export class ProdutoImagemDTO {
  //----------------

  @IsString({
    message: 'Url com formato inválido',
  })
  url: string;

  //----------------

  @IsString({
    message: 'Descrição com formato inválido',
  })
  descricao: string;

  //----------------
}
