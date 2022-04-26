import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const CountryService = {
  async getAll() {
    return axios.get('');
  },
};
