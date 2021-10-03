/*ДОДЕЛАТЬ: 
-Редактор вынести  в отдельный модуль. 
-Отображение редактора сделать при событии "изменения значения поля #upload-file"
-Убирать eventListeners
*/
import { renderAllPhotos } from './preview.js';

renderAllPhotos();

//РЕДАКТИРОВАНИЕ ИЗОБРАЖЕНИЯ

const SCALE_PRESET = {
  STEP: 25,
  MIN: 25,
  MAX: 100
}

const scrollOff = () => { document.body.classList.add('modal-open') };
const scrollOn = () => { document.body.classList.remove('modal-open') };
const imageUploadPreview = document.querySelector('.img-upload__preview > img');
const controlValue = document.querySelector('.scale__control--value');
const scaleUpButton = document.querySelector('.scale__control--bigger');
const scaleDownButton = document.querySelector('.scale__control--smaller');

const onEscapePress = () => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      editorModalClose();
    }
  })
}

const scaleReset = () => {
  imageUploadPreview.style = 'transform: scale(1.00)';
  controlValue.value = '100%';
}

const editorModalClose = () => {
  scrollOn();
  document.querySelector('.img-upload__overlay').classList.add('hidden');
}
const editorModalOpen = () => {
  scrollOff();
  onEscapePress();
  scaleReset();
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  const editorCloseButtonElement = document.querySelector('#upload-cancel');
  editorCloseButtonElement.addEventListener('click', editorModalClose);
};

const scaleControlUp = () => {
  let scale = parseInt(controlValue.value,10) + SCALE_PRESET.STEP;
  if (scale >= SCALE_PRESET.MAX) {scale = 100}
  controlValue.value = scale +'%';
  imageUploadPreview.style = `transform: scale(${scale/100})`;
}

const scaleControlDown = () => {
  let scale = parseInt(controlValue.value,10) - SCALE_PRESET.STEP;
  if (scale <= SCALE_PRESET.MIN) {scale = 25}
  controlValue.value = scale  + '%';
  imageUploadPreview.style = `transform: scale(${scale/100})`;
}

const imageEditorOpen = function () {
  editorModalOpen();  
  scaleUpButton.addEventListener('click',scaleControlUp);
  scaleDownButton.addEventListener('click',scaleControlDown);

}

imageEditorOpen(); 


// document.addEventListener("DOMContentLoaded", showFullPicture)