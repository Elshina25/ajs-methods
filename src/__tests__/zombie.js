import Zombie from '../js/Zombie';

test('create personage', () => {
  const zombie = new Zombie('personage', 'Zombie');
  expect(zombie).toEqual({
    name: 'personage',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('less name symbols', () => {
  expect(() => {
    const zombie = new Zombie('a', 'Zombie'); // eslint-disable-line no-unused-vars
  }).toThrowError('Имя не должно быть короче 2 символов!');
});

test('more name symbols', () => {
  expect(() => {
    const zombie = new Zombie('dhglsjrjvflk', 'Zombie'); // eslint-disable-line no-unused-vars
  }).toThrowError('Имя не должно быть длиннее 10 символов!');
});

test('check type error of personage', () => {
  expect(() => {
    const zombie = new Zombie('Alex', 'Undead'); // eslint-disable-line no-unused-vars
  }).toThrowError('Неверный тип игрока!');
});
