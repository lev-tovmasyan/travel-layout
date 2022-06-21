import React from 'react';
import images from '../../assets/images/index';
import s from './Header.module.scss';

function Header() {
  return (
    <div className={s.header}>
      <div className={s.headerLeft}>
        <div>Travel</div>
        <div>Goo</div>
      </div>
      <div className={s.headerTabs}>
        <div>Home</div>
        <div>About Us</div>
        <div>Packages</div>
      </div>
      <div className={s.headerRight}>
        <img src={images.star} className={s.starIcons} />
        <img src={images.PPicon} className={s.PPicon} />
      </div>
    </div>
  );
}

export default Header;
