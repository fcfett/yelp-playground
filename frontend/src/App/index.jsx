import React, { useState, useEffect } from 'react';
import './styles.scss';
import { getBestIceCreamShops } from '../services/yelp-api';
import Shop from '../components/Shop';

export default () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getBestIceCreamShops();
      if (data) setShops(data);
    })();
  }, []);

  return (
    <div id="app">
      <header className="stand">
        <h2>The Best</h2>
        <h1>Ice Cream</h1>
        <h2>Shops</h2>
        <strong>Ever!</strong>
      </header>
      <main>
        <ul className="shop-list">
          {shops.map((shop) => (
            <li key={shop.id}>
              <Shop {...shop} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
