const { Router } = require('express');
const routes = Router();
const { getBestShops, getShopReview } = require('./controllers/ShopControlller');

routes.get('/best-shops', getBestShops);
routes.get('/best-shops/:id/review', getShopReview);

module.exports = routes;
