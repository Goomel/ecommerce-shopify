import React from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { Menu } from '@/lib/types';
import Container from '@/app/components/container/Container';
import styles from './navbar.module.scss';
import Logo from '@/app/components/Logo';
import Cart from '@/app/components/cart/Cart';

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

const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <Container>
        <div className={styles.innerWrapper}>
          <div>
            <NavMobile menu={menu} />
            <NavDesktop menu={menu} />
          </div>
          <div className={styles.logoWrapper}>
            <Logo />
          </div>
          <Cart />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
