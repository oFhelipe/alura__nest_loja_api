import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

export class CriaUsuarioDTO {
  //----------------

  @IsNotEmpty({
    message: 'O nome não pode ser vazio',
  })
  @IsString({
    message: 'Nome inválido',
  })
  nome: string;

  //----------------

  @IsEmail(
    {},
    {
      message: 'O e-mail informado é inválido',
    },
  )
  @EmailEhUnico({
    message: 'Já existe um usuário com este e-mail',
  })
  email: string;

  //----------------

  @MinLength(6, {
    message: 'A senha precisa ter pelo menos 6 caracteres',
  })
  @IsString({
    message: 'Senha inválida',
  })
  senha: string;

  //----------------
}
