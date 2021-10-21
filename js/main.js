/*ДОДЕЛАТЬ: 
-Отображение редактора сделать при событии "изменения значения поля #upload-file"
-Убирать eventListeners
*/
import { renderAllPhotos } from './preview.js';
import { imageEditorOpen } from './editor.js'
import { getData } from './api.js';


getData(renderAllPhotos);

imageEditorOpen(); 


// document.addEventListener("DOMContentLoaded", showFullPicture)