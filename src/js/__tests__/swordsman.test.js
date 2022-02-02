import Swordsman from '../swordsman';

test('should construct character properly', () => {
  const result = new Swordsman('Vasya', 'Swordsman');

  expect(result).toEqual({
    name: 'Vasya', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});
