// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import simpleLightbox from 'simplelightbox';
// Change code below this line

console.log(galleryItems);
console.log(simpleLightbox);

const galleryContainer = document.querySelector(".gallery")

const array = galleryItems.reduce(
    (acc, {preview, original, description}) => {
       return acc + 
       `<a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
     </a>`
    }, '');

   
galleryContainer.insertAdjacentHTML('beforeend', array)
var lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: "alt",
  captionPosotion: 'bottom',
  captionDaley: 250
});