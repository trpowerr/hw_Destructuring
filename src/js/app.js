/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export const person = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderByProps(obj, param) {
  const paramArr = [];
  const otherParamArr = [];
  for (const value in param) {
    for (const value2 in obj) {
      if (param[value] === value2) {
        paramArr[paramArr.length] = { key: value2, value: obj[value2] };
        delete obj[value2];
      }
    }
  }
  for (const value in obj) {
    otherParamArr[otherParamArr.length] = { key: value, value: obj[value] };
  }

  otherParamArr.sort((a, b) => a.key.localeCompare(b.key));

  return paramArr.concat(otherParamArr.sort());
}
