import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';
import { EmailEhUnicoValidator } from './validacao/email-eh-unico.validator';

@Module({
  providers: [UsuarioRepository, EmailEhUnicoValidator],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
