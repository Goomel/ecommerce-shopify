import React from 'react';
import Link from 'next/link';
import styles from './nav-desktop.module.scss';
import { Menu, MenuItem } from '@/lib/types';

const NavDesktop = ({ menu }: { menu: Menu }) => {
  return (
    <ul className={styles.wrapper}>
      {menu.map((menuItem: MenuItem) => (
        <li key={menuItem.title}>
          <Link href={menuItem.href}>{menuItem.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavDesktop;
