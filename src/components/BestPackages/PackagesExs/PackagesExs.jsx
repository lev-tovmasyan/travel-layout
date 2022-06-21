import React from 'react';
import images from '../../../assets/images';
import s from './PackagesExs.module.scss';

function PackagesExs() {
  return (
    <div className={s.packagesExsContainer}>
      <div className={s.packagesImg1}>
        <div className={s.texts}>
          <div className={s.priceAndDays}>
            <div>3 Days, 2 NIghts</div>
            <div>$500 / Person</div>
          </div>
          <div className={s.packagesDescription}>
            Explore the Beauty of the island for 3 days and 2 nights with our travel agency
          </div>
          <div className={s.packagesLoc}>
            <div className={s.locContainer}>
              <img src={images.locationIcon} />
              <div>Indonesia</div>
            </div>
            <div className={s.knowMore}>Know More</div>
          </div>
        </div>
      </div>
      <div className={s.packagesImg2}>
        <div className={s.texts}>
          <div className={s.priceAndDays}>
            <div>3 Days, 2 NIghts</div>
            <div>$800 / Person</div>
          </div>
          <div className={s.packagesDescription}>
            Enjoy the Shrimes and blossoms here in this beautiful country
          </div>
          <div className={s.packagesLoc}>
            <div className={s.locContainer}>
              <img src={images.locationIcon} />
              <div>Japan</div>
            </div>
            <div className={s.knowMore}>Know More</div>
          </div>
        </div>
      </div>
      <div className={s.packagesImg3}>
        <div className={s.texts}>
          <div className={s.priceAndDays}>
            <div>3 Days, 2 NIghts</div>
            <div>$600 / Person</div>
          </div>
          <div className={s.packagesDescription}>
            Explore the majestic mountains and landscapes day and nights
          </div>
          <div className={s.packagesLoc}>
            <div className={s.locContainer}>
              <img src={images.locationIcon} />
              <div>Mountains</div>
            </div>
            <div className={s.knowMore}>Know More</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackagesExs;
