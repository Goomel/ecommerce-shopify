import React from 'react';
import styles from './logo.module.scss';
import LogoSvg from '@/assets/images/logo.svg';

const Logo = () => {
  return (
    <a href="/">
      <div className={styles.wrapper}>
        <LogoSvg />
      </div>
    </a>
  );
};

export default Logo;
