import { showAlert } from './util.js'


const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/kekstagram/datas')
    .then((response) => response.json())
    .then((json) => onSuccess(json))
    .catch((err) => {
    showAlert('Ошибка загрузки данных. Попробуйте обновить страницу')
    console.error(err)
    })
  }

  export { getData }