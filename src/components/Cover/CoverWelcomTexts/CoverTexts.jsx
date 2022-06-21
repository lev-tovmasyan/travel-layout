import React from 'react';
import s from './CoverTexts.module.scss';

function CoverTexts() {
  return (
    <div className={s.TextsConainer}>
      <div className={s.firstText}>Your Imagination Is Your Only Limit</div>
      <div className={s.secondText}>
        We always try to make our customer Happy. We provide all kind of facilities. Your
        Satisfaction is our main priority
      </div>
      <div className={s.coverButton}>Discover more</div>
    </div>
  );
}

export default CoverTexts;
