import React from 'react';
import s from './Buttons.module.scss';

function Buttons() {
  return (
    <div className={s.buttons}>
      <div className={s.greenButton}>Hot Deals</div>
      <div className={s.greyButton}>Backpack</div>
      <div className={s.greyButton}>South Asia</div>
      <div className={s.greyButton}>Honeymoon</div>
      <div className={s.greyButton}>Europe</div>
      <div className={s.greyButton}>More</div>
    </div>
  );
}

export default Buttons;
