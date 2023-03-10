import Swordsman from '../js/Swordsman';

test('create personage', () => {
  const swordsman = new Swordsman('personage', 'Swordsman');
  expect(swordsman).toEqual({
    name: 'personage',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('less name symbols', () => {
  expect(() => {
    const swordsman = new Swordsman('a', 'Swordsman'); // eslint-disable-line no-unused-vars
  }).toThrowError('Имя не должно быть короче 2 символов!');
});

test('more name symbols', () => {
  expect(() => {
    const swordsman = new Swordsman('djdordmalscqr', 'Swordsman'); // eslint-disable-line no-unused-vars
  }).toThrowError('Имя не должно быть длиннее 10 символов!');
});

test('check type error of personage', () => {
  expect(() => {
    const swordsman = new Swordsman('Alex', 'Zombie'); // eslint-disable-line no-unused-vars
  }).toThrowError('Неверный тип игрока!');
});
