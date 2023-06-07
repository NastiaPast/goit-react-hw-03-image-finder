const API_KEY = '35020941-f87e175105e6d04b9453ce51c';
const BASE_URL = 'https://pixabay.com/api/';

export const getSearch = (searchText, page) => {
  const params = new URLSearchParams({
    q: searchText,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  return fetch(`${BASE_URL}?${params}`);
};
