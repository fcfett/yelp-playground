const { getBestIceCreamShops, getShopReviews } = require('../services/yelp-api');

const getBestShops = async (req, res) => {
  const {
    data: { businesses = [] }
  } = await getBestIceCreamShops();

  const shops = businesses.map((shop) => {
    const {
      id,
      name,
      image_url,
      rating,
      location: { address1, city, state }
    } = shop;
    const address = `${address1}, ${city}/${state}`;
    return { id, name, image_url, rating, address };
  });

  res.json(shops);
};

const getShopReview = async (req, res) => {
  const { id } = req.params;
  const {
    data: { reviews = [] }
  } = await getShopReviews(id);

  const {
    text,
    rating,
    time_created,
    user: { image_url, name }
  } = reviews[0];

  const review = {
    name,
    text,
    rating,
    time_created,
    image_url
  };

  res.json(review);
};

module.exports = {
  getBestShops,
  getShopReview
};
