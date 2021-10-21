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
  return text.length <= count;
}


//Вывод сообщения об ошибке

const ALERT_SHOW_TIME = 5000;
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '12px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'purple';
  
  alertContainer.textContent = message;
  
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

console.log('Util is loaded');

export { getRandomNumber, checkCount, getRandomArrayElement, showAlert };