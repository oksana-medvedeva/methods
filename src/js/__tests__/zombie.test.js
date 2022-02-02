import Zombie from '../zombie';

test('should construct character properly', () => {
  const result = new Zombie('Vasya', 'Bowman');

  expect(result).toEqual({
    name: 'Vasya', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});
