import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];

  async salvar(usuario: UsuarioEntity) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }

  async buscarPeloId(id: string) {
    const possivelUsuario = this.usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );
    if (!possivelUsuario) {
      throw new Error('Usuario não existe');
    }
    return possivelUsuario;
  }

  async existeComEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );
    return possivelUsuario !== undefined;
  }

  async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
    const possivelUsuario = await this.buscarPeloId(id);

    Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      possivelUsuario[chave] = valor;
    });

    return possivelUsuario;
  }

  async remove(id: string) {
    const usuarioASerRemovido = await this.buscarPeloId(id);
    return this.usuarios.filter((usuarioSalvo) => {
      return usuarioSalvo.id !== usuarioASerRemovido.id;
    });
  }
}
