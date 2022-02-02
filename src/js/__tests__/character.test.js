import Character from '../character';

test('should construct character properly', () => {
  const result = new Character('Vasya', 'Undead');

  expect(result).toEqual({
    name: 'Vasya', type: 'Undead', health: 100, level: 1, attack: null, defence: null,
  });
});

test('should throw an error if name < 2', () => {
  expect(() => {
    /* eslint-disable no-new */
    new Character('W', 'Undead');
    /* eslint-enable no-new */
  }).toThrow(new Error('Имя должно содержать от 2 до 10 символов'));
});

test('should throw an error if name > 10', () => {
  expect(() => {
    /* eslint-disable no-new */
    new Character('Qwertyuiopa', 'Undead');
    /* eslint-enable no-new */
  }).toThrow(new Error('Имя должно содержать от 2 до 10 символов'));
});

test('should throw an error if type is wrong', () => {
  expect(() => {
    /* eslint-disable no-new */
    new Character('Woody', 'Woodpecker');
    /* eslint-enable no-new */
  }).toThrow(new Error('Укажите корректный тип персонажа'));
});

test('should throw an error if levelUp is made on dead Character', () => {
  expect(() => {
    const character = new Character('Grisha', 'Bowman');
    character.health = 0;
    character.level = 1;
    character.attack = 25;
    character.defence = 25;
    character.levelUp();
  }).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('should levelUp', () => {
  const character = new Character('Grisha', 'Bowman');
  character.health = 10;
  character.level = 1;
  character.attack = 25;
  character.defence = 25;

  character.levelUp();

  expect(character).toEqual({
    name: 'Grisha',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('should damage', () => {
  const character = new Character('Grisha', 'Bowman');
  character.health = 80;
  character.level = 1;
  character.attack = 25;
  character.defence = 25;
  const damagePoints = 100;

  character.damage(damagePoints);

  expect(character).toEqual({
    name: 'Grisha',
    type: 'Bowman',
    health: 5,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('after damage health should not be less than zero', () => {
  const character = new Character('Grisha', 'Bowman');
  character.health = 80;
  character.level = 1;
  character.attack = 25;
  character.defence = 0;
  const damagePoints = 100;

  character.damage(damagePoints);

  expect(character).toEqual({
    name: 'Grisha',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 0,
  });
});

test('should not change health if it is equal 0', () => {
  const character = new Character('Grisha', 'Bowman');
  character.health = 0;
  character.level = 1;
  character.attack = 25;
  character.defence = 0;
  const damagePoints = 100;

  character.damage(damagePoints);

  expect(character).toEqual({
    name: 'Grisha',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 0,
  });
});
