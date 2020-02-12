import React, { useState, useEffect } from 'react';
import './styles.scss';
import { getShopReview } from '../../services/yelp-api';
import ShopReview from '../ShopReview';

export default ({ id, name, image_url, rating, address }) => {
  const [review, setReview] = useState(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await getShopReview(id);
      if (data) setReview(data);
    })();
  }, [id]);

  return (
    <>
      <article className="shop" title="Click to toggle the review" onClick={() => setActive(!active)}>
        <figure>
          <img src={image_url} alt={`${name} logo`} />
          <div className="drop" />
          <div className="drop" />
        </figure>
        <section>
          <h1 className="title">{name}</h1>
          <span className="rating">
            {rating}
            <div className="drop" />
            <div className="drop" />
          </span>
          <span className="address">{address}</span>
        </section>
      </article>
      {review && <ShopReview {...review} active={active} />}
    </>
  );
};
