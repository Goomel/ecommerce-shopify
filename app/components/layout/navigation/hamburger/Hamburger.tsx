import React from 'react';
import cn from 'classnames';
import { HamburgerProps, HamburgerVariant } from '@/lib/types';
import styles from './hamburger.module.scss';

const Hamburger: React.FC<HamburgerProps> = ({ variant, onClick }) => {
  const currentVariantClassName = cn({
    [styles.close]: variant === HamburgerVariant.Close,
    [styles.open]: variant === HamburgerVariant.Open,
  });
  return (
    <button onClick={onClick} className={cn(styles.hamburgerWrapper, currentVariantClassName)}>
      <div className={cn(styles.hamburgerButton)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </button>
  );
};

export default Hamburger;
