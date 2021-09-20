import axios from 'axios';

import ApiConfigs from '../configs/api.config';

const api = axios.create({
  baseURL: ApiConfigs.API_URL,
});

export default api;