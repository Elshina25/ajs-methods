import Character from './Character';

export default class Bowman extends Character {
  constructor(name, type = 'Bowman', health = 100, level = 1, attack = 25, defence = 25) {
    if (name.length < 2) {
      throw new Error('Имя не должно быть короче 2 символов!');
    } if (name.length > 10) {
      throw new Error('Имя не должно быть длиннее 10 символов!');
    } if (type !== 'Bowman') {
      throw new Error('Неверный тип игрока!');
    }
    super(name, type, health, level, attack, defence);
  }
}
