import Magician from '../magician';

test('should construct character properly', () => {
  const result = new Magician('Vasya', 'Magician');

  expect(result).toEqual({
    name: 'Vasya', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});
