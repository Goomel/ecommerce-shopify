import React from 'react';
import styles from './Cart.module.scss';
import CartSvg from '@/assets/images/icons/cart.svg';

const Cart = () => {
  return (
    <div role="button" className={styles.wrapper}>
      <span className={styles.title}>Cart</span>
      <CartSvg className={styles.icon} />
    </div>
  );
};

export default Cart;
