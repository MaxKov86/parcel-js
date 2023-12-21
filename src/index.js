import fetchImg from './fetch-img';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { v4 as uuidv4 } from 'uuid';

const inputEl = document.querySelector('.input');
const searchBtn = document.querySelector('.btn');
const imageList = document.querySelector('.image-list');

searchBtn.addEventListener('click', onSearchBtnClick);
imageList.addEventListener('click', onCardClick);

function onSearchBtnClick() {
  const query = inputEl.value;
  fetchImg(query).then(res => {
    imageList.insertAdjacentHTML('beforeend', renderImages(res.hits));
  });
}

function renderImages(items) {
  return items
    .map(
      ({ largeImageURL, tags, id }) =>
        `
      <a class = "image-link"  href = "${largeImageURL}"  >
      <img class = "img" src = "${largeImageURL}" alt = '${id}' >
      </a>
   
      
      
    `
    )
    .join('');
}

function onCardClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('img')) {
    return;
  }

  let lightBox = new SimpleLightbox('.image-list  a', {
    captionsData: `id`,
    captionDelay: 250,
  });
  lightBox.open();
}

// const time = document.querySelector('.time');

// function updateTime() {
//   setInterval(() => {
//     time.textContent = new Date().toLocaleTimeString('uk');
//   }, 1000);
// }
// updateTime();
const id = uuidv4();
[...id].map(item => console.log(item.toString(16).padStart(2, '0')));
