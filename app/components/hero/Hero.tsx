import React from 'react';
import Image from 'next/image';
import HeroImg from '@/assets/images/hero-img.jpg';
import styles from './Hero.module.scss';
import LogoSvg from '@/assets/images/logo.svg';

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={HeroImg} alt="woman" fill className={styles.bgImage} />
      <div className={styles.heroLogo}>
        <LogoSvg />
      </div>
    </div>
  );
};

export default Hero;
