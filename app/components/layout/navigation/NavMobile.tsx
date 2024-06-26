'use client';

import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickAway, useMedia } from 'react-use';
import cn from 'classnames';
import Link from 'next/link';
import { Menu, MenuItem, HamburgerVariant } from '@/lib/types';
import styles from './nav-mobile.module.scss';
import Hamburger from './hamburger/Hamburger';

const NavMobile = ({ menu }: { menu: Menu }) => {
  const [isOpen, setOpen] = useState(false);
  const navMobileRef = useRef(null);
  const toggleMenuOpen = () => {
    setOpen(!isOpen);
  };

  // Close the menu when user click outside the component
  useClickAway(navMobileRef, () => setOpen(false));

  // Close the menu when user enlarge the screen to > 1024px
  const isWide = useMedia('(min-width: 1024px)', false);
  useEffect(() => {
    if (isWide) setOpen(false);
  }, [isWide]);

  // Disable scrolling when menu is open
  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.style.overflow = isOpen ? 'hidden' : 'auto';
    }
  }, [isOpen]);

  return (
    <div ref={navMobileRef}>
      <div className={cn({ [styles.menuOverlay]: isOpen })}></div>
      <Hamburger variant={HamburgerVariant.Open} onClick={toggleMenuOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.menu}
          >
            <Hamburger variant={HamburgerVariant.Close} onClick={toggleMenuOpen} />
            <ul className={styles.list}>
              {menu.map((menuItem: MenuItem, index) => (
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 25,
                    delay: 0.15 + index / 10,
                  }}
                  key={menuItem.title}
                >
                  <Link href={menuItem.href}>{menuItem.title}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
