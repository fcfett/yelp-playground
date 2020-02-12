const axios = require('axios');

const apiKey =
  'yibVyRTw-sXaOTcmg_G_efDwCzQT6-PncbABo-DQO0fgDlUD6gATNFmmVjoI6ELig6HQmssxEyCLYBc7DF3DT8MAlUGwBdtCmovgBwxiYh2JLsfUl6cVAjS-cnI8XnYx';

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${apiKey}`
  }
});

const getBestIceCreamShops = () =>
  api.get(`/businesses/search?location=Alpharetta&categories=icecream&limit=5&sort_by=rating`);

const getShopReviews = (shopId) => api.get(`/businesses/${shopId}/reviews`);

module.exports = {
  getBestIceCreamShops,
  getShopReviews
};
