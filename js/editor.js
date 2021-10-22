//РЕДАКТИРОВАНИЕ ИЗОБРАЖЕНИЯ

const SCALE_PRESET = {
  STEP: 25,
  MIN: 25,
  MAX: 100
}

//Отключение скролла
const scrollOff = () => { document.body.classList.add('modal-open') };
const scrollOn = () => { document.body.classList.remove('modal-open') };

//Открытие превью
const imageUploadPreview = document.querySelector('.img-upload__preview > img');

//Управление масштабом
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

const sliderHide = () => {sliderBlock.classList.add('hidden')}
const sliderShow = () => {sliderBlock.classList.remove('hidden')}


const editorModalClose = () => {
  scrollOn();
  document.querySelector('.img-upload__overlay').classList.add('hidden');
}

const editorModalOpen = () => {
  scrollOff();
  onEscapePress();
  scaleReset();
  sliderHide();
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



//Effect slider

const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelElement = document.querySelector('.effect-level__value')
const effectSelector = document.querySelector('.effects__list');
const sliderBlock = document.querySelector('.img-upload__effect-level');
let selectedFilter = '';
let pxOrPercent = '';
let filterType = 'none'

//Обработчик переключения эффектов
const effectsHandler = (evt) => {
  selectedFilter = evt.target.value;  
  imageUploadPreview.className = 'img-upload__preview';
  imageUploadPreview.style = '';
  imageUploadPreview.classList.add(`effects__preview--${selectedFilter}`);
 
  
  if (selectedFilter == 'none') {
    sliderHide()
  } else {    
  sliderShow();
  }  

  switch (selectedFilter) {
    case 'chrome':
      filterType = 'grayscale';
      pxOrPercent = '';
      sliderElement.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 1
      },
        start: 0.8,
        step: 0.1,
      }); 
      break;
    case 'sepia':
      filterType = 'sepia';
      pxOrPercent = '';
      sliderElement.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 1
      },
        start: 0.8,
        step: 0.1,
      }); 
      break;
    case 'marvin':
      pxOrPercent = '%';
      filterType = 'invert';
      sliderElement.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 100
      },
        start: 80,
        step: 1,
      });
      break;
    case 'phobos':
      filterType = 'blur';
      pxOrPercent = 'px';
      sliderElement.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 3
      },
        start: 2.4,
        step: 0.1,
      });
      break;

    case 'heat':
      filterType = 'brightness';
      pxOrPercent = '';
      sliderElement.noUiSlider.updateOptions({
        range: {
          'min': 1,
          'max': 3
      },
        start: 2.6,
        step: 0.1,
      });
      break;

    default:
      filterType = 'none';
      sliderHide()
      break;
  }
}

//Listener переключения эффектов
effectSelector.addEventListener('change', effectsHandler)


//Создаём слайдер
noUiSlider.create(sliderElement, {
  range: {
      min: 0,
      max: 1,
  },
  start: 0.8,
  step: 0.1,
});

sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {   
  effectLevelElement.value = unencoded[handle];
  let filterValue = effectLevelElement.value;
  imageUploadPreview.style = `filter: ${filterType}(${filterValue}${pxOrPercent})`
});


export { imageEditorOpen }