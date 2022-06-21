import React from 'react';
import Buttons from './Buttons/Buttons';
import s from './Packages.module.scss';
import PackagesExs from './PackagesExs/PackagesExs';

function Packages() {
  return (
    <div className={s.packagesContainer}>
      <div className={s.packagesText}>Best Packages For You</div>
      <Buttons />
      <PackagesExs />
    </div>
  );
}

export default Packages;
