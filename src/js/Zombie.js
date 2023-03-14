import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type = 'Zombie', health = 100, level = 1, attack = 40, defence = 10) {
    if (name.length < 2) {
      throw new Error('Имя не должно быть короче 2 символов!');
    } if (name.length > 10) {
      throw new Error('Имя не должно быть длиннее 10 символов!');
    } if (type !== 'Zombie') {
      throw new Error('Неверный тип игрока!');
    }
    super(name, type, health, level, attack, defence);
  }
}
