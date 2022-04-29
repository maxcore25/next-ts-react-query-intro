import axios from 'axios';

const API_URL = 'http://localhost:3001';

axios.defaults.baseURL = API_URL;

export interface ICountry {
  id: number;
  name: string;
  description: string;
}

export const CountryService = {
  async getAll() {
    return axios.get<ICountry[]>('/countries');
  },
};
