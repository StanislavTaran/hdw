import axios from 'axios';
import { FACTS_BASE_URL } from '../constants/UrlsApi';

axios.defaults.baseURL = FACTS_BASE_URL;

export const fetchFact = () => {
  axios({});
};
