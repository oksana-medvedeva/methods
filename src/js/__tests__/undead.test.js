import Undead from '../undead';

test('should construct character properly', () => {
  const result = new Undead('Vasya', 'Undead');

  expect(result).toEqual({
    name: 'Vasya', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});
