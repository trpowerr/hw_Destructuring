/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
export const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export default function descriptionObj(obj) {
  const finalArr = [];
  for (const value in obj.special) {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = obj.special[value];
    finalArr.push({
      id, name, icon, description,
    });
  }

  return finalArr;
}
