import React from 'react';
import Header from '../Header/Header';
import s from './Cover.module.scss';
import CoverTexts from './CoverWelcomTexts/CoverTexts';

function Cover() {
  return (
    <div className={s.coverWrapper}>
      <Header />
      <CoverTexts />
    </div>
  );
}

export default Cover;
