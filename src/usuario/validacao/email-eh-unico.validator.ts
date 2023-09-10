import {
  ValidatorConstraintInterface,
  ValidatorConstraint,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({
  async: true,
})
export class EmailEhUnicoValidator implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: UsuarioRepository) {}

  async validate(email: string): Promise<boolean> {
    const usuarioComEmailExiste =
      await this.usuarioRepository.existeComEmail(email);
    return !usuarioComEmailExiste;
  }
}

export const EmailEhUnico = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: any, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: EmailEhUnicoValidator,
    });
  };
};
