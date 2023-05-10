import fetchImg from './fetch-img';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const formEl = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
formEl.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(e) {
  e.preventDefault();

  const searchQuery = e.target.elements.query.value;
  formEl.elements.query.value = '';
  fetchImg(searchQuery).then(({ hits }) => {
    gallery.insertAdjacentHTML('beforeend', render(hits));

    const lightBox = new SimpleLightbox('.gallery a', {
      captionsData: `alt`,
      captionDelay: 250,
      scaleImageToRatio: true,
    });
  });
}

gallery.addEventListener('click', onGalleryCardClick);

function render(hits) {
  return hits.map(
    ({ largeImageURL, tags, webformatURL }) => `<li >
   <a class="gallery__item" href="${largeImageURL}">
   <img class="gallery__img" src = "${webformatURL}" alt = "${tags}" width="340" />
   </a> 
   </li>
    `
  );
}

function onGalleryCardClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains(`gallery__image`)) {
    return;
  }
}
