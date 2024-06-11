'use client';

import React from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { Menu } from '@/lib/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '@/app/components/container/Container';
import styles from './navbar.module.scss';
import LogoSvg from '@/assets/images/icons/logo.svg';
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
  const { scrollY } = useScroll();
  // set opacity to 1 when scrolLY is equal to 100px
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <nav className={styles.wrapper}>
      <Container>
        <div className={styles.innerWrapper}>
          <div>
            <NavMobile menu={menu} />
            <NavDesktop menu={menu} />
          </div>
          <motion.div
            style={{ opacity }}
            transition={{ duration: 5000 }}
            className={styles.logoWrapper}
          >
            <LogoSvg />
          </motion.div>
          <div className={styles.cartWrapper}>
            <Cart />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
