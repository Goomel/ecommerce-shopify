'use client';

import React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { Menu } from '@/lib/types';
import styles from './nav-mobile.module.scss';

const NavMobile = ({ menu }: { menu: Menu }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenuOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      role="button"
      aria-label="menu"
      className={styles.hamburgerWrapper}
      onClick={toggleMenuOpen}
    >
      <div className={cn(styles.hamburgerButton, { [styles.isOpen]: isOpen })}>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </div>
    </div>
  );
};

export default NavMobile;
