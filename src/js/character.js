const typesArray = new Set(['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']);

export default class Character {
  constructor(name, type) {
    this.name = name;
    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }
    this.type = type;
    if (!typesArray.has(type)) {
      throw new Error('Укажите корректный тип персонажа');
    }
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health > 0) {
      const health = this.health - points * (1 - this.defence / 100);
      this.health = health >= 0 ? health : 0;
    }
  }
}
