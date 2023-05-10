const API_KEY = '34526021-da361fec4a670d7e6ab3378e0';
const BASE_URL = 'https://pixabay.com/api/';

export default function fetchImg(searchQuery) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo`
  ).then(response => response.json());
}
