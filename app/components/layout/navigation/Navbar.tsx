import React from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { Menu } from '@/lib/types';
import Container from '@/app/components/container/Container';
import styles from './navbar.module.scss';
import LogoSvg from '@/assets/images/logo.svg';
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
            <LogoSvg />
          </div>
          <div className={styles.cartWrapper}>
            <Cart />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
