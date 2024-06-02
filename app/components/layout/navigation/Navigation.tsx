import React from 'react';
import Link from 'next/link';
import styles from './navigation.module.scss';
import { Menu } from '@/lib/types';
import Container from '../../container/Container';

const menu: Menu = [
  {
    title: 'Home',
    href: '#',
  },
  {
    title: 'Explore',
    href: '#',
  },
  {
    title: 'About',
    href: '#',
  },
];

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <Container>
        <ul>
          {menu.map((menuItem) => (
            <li key={menuItem.title}>
              <Link href={menuItem.href}>{menuItem.title}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
