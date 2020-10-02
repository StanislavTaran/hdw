import axios from 'axios';
import { FACTS_BASE_URL } from '../constants/UrlsApi';

export const fetchFact = () => {
  return axios({ method: 'get', url: FACTS_BASE_URL.INDEX });
};
