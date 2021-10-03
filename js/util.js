//Генератор целых чисел в заданном диапазоне
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [max, min] = [min, max];
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Выбор случайнного элемента массива
const getRandomArrayElement = function(array) {
  return array[getRandomNumber(0, array.length - 1)]
}

// Проверка длины текста
const checkCount = (text, count) => {
  return text.length <= count;Ы
}



console.log('Util is loaded');

export { getRandomNumber, checkCount, getRandomArrayElement };