import Bowman from '../bowman';

test('should construct character properly', () => {
  const result = new Bowman('Vasya', 'Bowman');

  expect(result).toEqual({
    name: 'Vasya', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});
