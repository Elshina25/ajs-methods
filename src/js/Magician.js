import Character from './Character';

export default class Magician extends Character {
  constructor(name, type = 'Magician', health = 100, level = 1, attack = 10, defence = 40) {
    if (name.length < 2) {
      throw new Error('Имя не должно быть короче 2 символов!');
    } if (name.length > 10) {
      throw new Error('Имя не должно быть длиннее 10 символов!');
    } if (type !== 'Magician') {
      throw new Error('Неверный тип игрока!');
    }
    super(name, type, health, level, attack, defence);
  }
}
