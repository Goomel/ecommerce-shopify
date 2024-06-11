'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import HeroImg from '@/assets/images/hero-img.jpg';
import styles from './hero.module.scss';
import LogoSvg from '@/assets/images/icons/logo.svg';

const Hero = () => {
  const { scrollY } = useScroll();
  // set opacity to 0 when scrolLY is equal to 100px
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <div className={styles.wrapper}>
      <Image src={HeroImg} alt="woman" fill className={styles.bgImage} />
      <motion.div
        style={{ opacity }}
        transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}
        className={styles.heroLogo}
      >
        <LogoSvg />
      </motion.div>
    </div>
  );
};

export default Hero;
