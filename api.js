import axios from 'axios';

export const fetchCountries = async () => {
  try {
    const response = await axios.get('https://naras-api.vercel.app/all');
    return response.data;
  } catch (e) {
    return [];
  }
};

export const fetchSearchResults = async (q) => {
  try {
    const response = await axios.get(`
        https://naras-api.vercel.app/search?q=${q}`);
    return response.data;
  } catch (e) {
    return [];
  }
};

export const fetchCountry = async (id) => {
  try {
    const response = await axios.get(`https://naras-api.vercel.app/code/${id}`);
    return response.data;
  } catch (e) {
    return [];
  }
};
