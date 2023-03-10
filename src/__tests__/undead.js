import Undead from '../js/Undead';

test('create personage', () => {
  const undead = new Undead('personage', 'Undead');
  expect(undead).toEqual({
    name: 'personage',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('less name symbols', () => {
  expect(() => {
    const undead = new Undead('a', 'Undead'); // eslint-disable-line no-unused-vars
  }).toThrowError('Имя не должно быть короче 2 символов!');
});

test('more name symbols', () => {
  expect(() => {
    const undead = new Undead('djdordmalscqr', 'Undead'); // eslint-disable-line no-unused-vars
  }).toThrowError('Имя не должно быть длиннее 10 символов!');
});

test('check type error of personage', () => {
  expect(() => {
    const undead = new Undead('Alex', 'Zombie'); // eslint-disable-line no-unused-vars
  }).toThrowError('Неверный тип игрока!');
});
