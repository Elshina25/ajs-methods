import Bowman from '../js/Bowman';

test('create personage', () => {
  const bowman = new Bowman('personage', 'Bowman');
  expect(bowman).toEqual({
    name: 'personage',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('less name symbols', () => {
  expect(() => {
    const bowman = new Bowman('a', 'Bowman'); // eslint-disable-line no-unused-vars
  }).toThrowError('Имя не должно быть короче 2 символов!');
});

test('more name symbols', () => {
  expect(() => {
    const bowman = new Bowman('djdordmalscqr', 'Bowman'); // eslint-disable-line no-unused-vars
  }).toThrowError('Имя не должно быть длиннее 10 символов!');
});

test('check type error of personage', () => {
  expect(() => {
    const bowman = new Bowman('Alex', 'Zombie'); // eslint-disable-line no-unused-vars
  }).toThrowError('Неверный тип игрока!');
});

test('level up', () => {
  const bowman = new Bowman('pers', 'Bowman');
  const bowmanLevelUp = bowman.levelUp();
  expect(bowmanLevelUp.level).toEqual(2)
})