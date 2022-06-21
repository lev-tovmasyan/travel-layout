import React from 'react';
import s from './Destinations.module.scss';

function Destinations() {
  return (
    <div className={s.Destinations}>
      <div className={s.destinationTitle}>
        <h2 style={{ fontSize: 35 }}>
          Our Popular Destinations
        </h2>
      </div>
      <div className={s.destinationContent}>
        <div className={s.destinationGlobus} />
        <div className={s.destinationItems} >
          <div className={s.destinationItem}>
            <div className={s.itemImg1} />
            <div className={s.itemCOntent}>
              <div className={s.itemInnerContent}>
                <h3>Thailand</h3>
                <h3>20+ Spots</h3>
                <h3>2D & 3N</h3>
              </div>
            </div>
          </div>
          <div className={s.destinationItem}>
            <div className={s.itemImg2} />
            <div className={s.itemCOntent}>
              <div className={s.itemInnerContent}>
                <h3>Indonesia</h3>
                <h3>25+ Spots</h3>
                <h3>3D & 2N</h3>
              </div>
            </div>
          </div>
          <div className={s.destinationItem}>
            <div className={s.itemImg3} />
            <div className={s.itemCOntent}>
              <div className={s.itemInnerContent}>
                <h3>New Zealand</h3>
                <h3>20+ Spots</h3>
                <h3>2D & 3N</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Destinations;
