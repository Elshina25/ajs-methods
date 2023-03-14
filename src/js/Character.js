export default class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    const updateData = {
      health: 100,
      level: this.level += 1,
      attack: (this.attack * 20) / 100 + this.attack,
      defence: (this.defence * 20) / 100 + this.defence,
    };
    if (this.health > 0) {
      return Object.assign(this, updateData);
    }
    throw new Error('Потрачено!');
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Потрачено!');
    }
  }
}
