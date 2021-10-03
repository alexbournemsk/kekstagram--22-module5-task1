console.log('Bigpicture is loaded');
/*
ДОДЕЛАТЬ

1. Заменить 
  -функции на стрелочные
  -for на foreach

2. Сделать append через documentFragment

3. Чистка eventListeners

4. scrollOff
После открытия окна добавьте тегу <body> класс modal-open, чтобы 
контейнер с фотографиями позади не прокручивался при скролле. 
При закрытии окна не забудьте удалить этот класс.

5. После открытия окна спрячьте блоки счётчика комментариев .social__comment-count 
и загрузки новых комментариев .comments-loader, добавив им класс hidden, 
с ними мы разберёмся позже, в другом домашнем задании.
*/

const bigPictureElement = document.querySelector('.big-picture');
const closeButton = bigPictureElement.querySelector('#picture-cancel');
//Шаблон коммента
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
//Куда добавлять коммент
const commentsList = document.querySelector('.social__comments');

const modalClose = function() {
  bigPictureElement.classList.add('hidden');
  commentsList.innerHTML = ''; //обнуляем список комментов
}

const addComments = function(comments) {
  for (let i = 0; i < comments.length; i++) {
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('img').src = comments[i].avatar;
    newComment.querySelector('.social__text').textContent = comments[i].message;
    commentsList.appendChild(newComment);
  }
}

const modalShow = function (picture) {
  const bigPictureImg = document.querySelector('.big-picture__img').querySelector('img');
  const likesCount = document.querySelector('.likes-count');  
  const photoDescription = document.querySelector('.social__caption');
  
  bigPictureElement.classList.remove('hidden');
  likesCount.textContent = picture.likes;
  bigPictureImg.src = picture.url;
  photoDescription.textContent = picture.description;
  addComments(picture.comments);  
  
  closeButton.addEventListener('click',modalClose)
}

export { modalShow }