import descriptionObj, { character } from '../js/app';

test('checking for a true array', () => {
  const received = descriptionObj(character);
  const expected = [
    {
      id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно',
    },
  ];
  expect(received).toStrictEqual(expected);
});
