import Daemon from '../daemon';

test('should construct character properly', () => {
  const result = new Daemon('Vasya', 'Daemon');

  expect(result).toEqual({
    name: 'Vasya', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  });
});
