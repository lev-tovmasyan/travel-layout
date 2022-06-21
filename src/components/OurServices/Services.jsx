import React from 'react';
import Categories from './Categories/Categories';
import s from './Services.module.scss';

function Services() {
  return (
    <div className={s.servicesContainer}>
      <div className={s.serviceText}>Our Service</div>
      <Categories />
    </div>
  );
}

export default Services;
