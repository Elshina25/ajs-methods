import Character from './Character';

export default class Bowman extends Character { // eslint-disable-line no-unused-vars
  constructor(name, type) {
    if (name.length < 2) {
      throw new Error('Имя не должно быть короче 2 символов!');
    } if (name.length > 10) {
      throw new Error('Имя не должно быть длиннее 10 символов!');
    } if (type !== 'Bowman') {
      throw new Error('Неверный тип игрока!');
    }
    super(name, type);
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }
}
