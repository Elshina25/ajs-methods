export default class Character { // eslint-disable-line no-unused-vars
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  };

  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.attack += (this.attack * 0.2) / 100;
      this.defence += (this.defence * 0.2) / 100;
      this.health = 100;
    } else {
      throw new Error('Потрачено!');
    }
  }
}
