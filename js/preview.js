import { photos } from './data.js';
import { modalShow } from './bigpicture.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const renderPhoto = function (picture) {
  let photoPreview = pictureTemplate.cloneNode(true);  
  photoPreview.querySelector('.picture__img').src = picture.url;
  photoPreview.querySelector('.picture__likes').textContent = picture.likes;
  photoPreview.querySelector('.picture__comments').textContent = picture.comments.length;
  photoPreview.addEventListener('click', ()=>{modalShow(picture)})
  picturesList.appendChild(photoPreview);
}
  
const renderAllPhotos = function() {
  photos.forEach(picture => {
    renderPhoto(picture)
  });
}


console.log('Previews is loaded');
export { renderAllPhotos };

