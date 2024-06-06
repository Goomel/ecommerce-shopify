import React from 'react';
import cn from 'classnames';
import { Menu } from '@/lib/types';
import styles from './nav-mobile.module.scss';

const NavMobile = ({ menu }: { menu: Menu }) => {
  return (
    <div className={styles.hamburgerWrapper}>
      <div className={cn(styles.hamburgerButton, { [styles.isOpen]: true })}>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </div>
    </div>
  );
};

export default NavMobile;
