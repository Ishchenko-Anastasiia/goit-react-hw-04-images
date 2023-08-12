const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37710226-2a3ec1a61ca81a1ed994291d3';

export const getAPI = (q, page) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  });
  return fetch(`${BASE_URL}?${params}`);
};