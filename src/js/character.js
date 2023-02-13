export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    const typeClass = [
      'Bowman',
      'Daemon',
      'Magician',
      'Swordsman',
      'Undead',
      'Zombie',
    ];
    if (name.length <= 2 && name.lenght >= 10) {
      throw new Error(
        'Допускаются только имена длиной от 2 символов и не более 10',
      );
    }
    if (typeof name !== 'string') {
      throw new Error('Тип класса должен быть строкой');
    }
    if (!typeClass.includes(type)) {
      throw new Error(
        'Выберите один из доступных классов: Bowman, Daemon, Magician, Swordsman, Undead, Zombie',
      );
    }
  }
}
