import Character from './Character';

export default class Daemon extends Character { // eslint-disable-line no-unused-vars
  constructor(name, type, health, level, attack, defence) {
    if (name.length < 2) {
      throw new Error('Имя не должно быть короче 2 символов!');
    } if (name.length > 10) {
      throw new Error('Имя не должно быть длиннее 10 символов!');
    } if (type !== 'Daemon') {
      throw new Error('Неверный тип игрока!');
    }
    super(name, type, health, level, attack, defence);
  }
}
