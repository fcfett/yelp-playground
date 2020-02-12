import axios from 'axios';

export const api = axios.create({ baseURL: 'http://localhost:3333' });

export const getBestIceCreamShops = () => api.get('/best-shops');

export const getShopReview = (shopId) => api.get(`/best-shops/${shopId}/review`);

export default {
  getBestIceCreamShops,
  getShopReview
};
