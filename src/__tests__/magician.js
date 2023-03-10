import Magician from '../js/Magician';

test('create personage', () => {
  const magician = new Magician('personage', 'Magician');
  expect(magician).toEqual({
    name: 'personage',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('less name symbols', () => {
  expect(() => {
    const magician = new Magician('a', 'Magician'); // eslint-disable-line no-unused-vars
  }).toThrowError('Имя не должно быть короче 2 символов!');
});

test('more name symbols', () => {
  expect(() => {
    const magician = new Magician('djdordmalscqr', 'Magician'); // eslint-disable-line no-unused-vars
  }).toThrowError('Имя не должно быть длиннее 10 символов!');
});

test('check type error of personage', () => {
  expect(() => {
    const magician = new Magician('Alex', 'Zombie'); // eslint-disable-line no-unused-vars
  }).toThrowError('Неверный тип игрока!');
});
