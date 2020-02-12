import React from 'react';
import './styles.scss';
import { getDate } from '../../utils/helpers';

export default ({ active, name, text, rating, time_created, image_url }) => {
  const getActiveClass = () => (active ? 'active' : '');

  return (
    <blockquote className={`review ${getActiveClass()}`}>
      <header>
        <img className="avatar" src={image_url} alt={`${name}'s avatar`} />
        <section>
          <h2 className="name">{name}</h2>
          <span className="date">{getDate(time_created)}</span>
          <span className="rating">{rating}</span>
        </section>
      </header>
      <q className="text">{text}</q>
    </blockquote>
  );
};
