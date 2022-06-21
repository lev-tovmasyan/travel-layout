import React from 'react';
import images from '../../../assets/images';
import s from './Categories.module.scss';

function Categories() {
  return (
    <div className={s.categoriesContainer}>
      <div className={s.categoryItem}>
        <img src={images.Ticket} className={s.categoriesIcons} />
        <div className={s.categoriesFirstText}>Ticket Booking</div>
        <div className={s.categoriesSecondText}>
          We book all kind of national or international ticket for your destinaion.
        </div>
      </div>
      <div className={`${s.categoryItem} ${s.activeCategoryItem}`}>
        <img src={images.Hotel} className={s.categoriesIcons} />
        <div className={s.categoriesFirstText}>Hotel Booking</div>
        <div className={s.categoriesSecondText}>
          You can easily book your according to your budget hotel by our website.
        </div>
      </div>
      <div className={s.categoryItem}>
        <img src={images.Tour} className={s.categoriesIcons} />
        <div className={s.categoriesFirstText}>Tour Plan</div>
        <div className={s.categoriesSecondText}>
          We provide you the best plan within a short time explore more.
        </div>
      </div>
    </div>
  );
}

export default Categories;
