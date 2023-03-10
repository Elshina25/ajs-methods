import Daemon from '../js/Daemon';

test('create personage', () => {
  const daemon = new Daemon('personage', 'Daemon');
  expect(daemon).toEqual({
    name: 'personage',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('less name symbols', () => {
  expect(() => {
    const daemon = new Daemon('a', 'Daemon'); // eslint-disable-line no-unused-vars
  }).toThrowError('Имя не должно быть короче 2 символов!');
});

test('more name symbols', () => {
  expect(() => {
    const daemon = new Daemon('djdordmalscqr', 'Daemon'); // eslint-disable-line no-unused-vars
  }).toThrowError('Имя не должно быть длиннее 10 символов!');
});

test('check type error of personage', () => {
  expect(() => {
    const daemon = new Daemon('Alex', 'Zombie'); // eslint-disable-line no-unused-vars
  }).toThrowError('Неверный тип игрока!');
});
