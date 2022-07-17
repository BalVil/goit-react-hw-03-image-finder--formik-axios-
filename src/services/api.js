import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'key=27754305-6c0117069a54d6a4ab2d99661';
const PER_PAGE = 'per_page=12';

export const fetchImages = async (query, page) => {
  const url = `${BASE_URL}?q=${query}&page=${page}&${API_KEY}&image_type=photo&orientation=horizontal&${PER_PAGE}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
