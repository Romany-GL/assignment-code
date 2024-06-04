'use client';

import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';

function MainNav() {
  const { getCartLength } = useCart();
  return (
    <nav className={styles.mainNav}>
      <Image
        className={styles.logo}
        src='/octopus-logo.svg'
        alt='Octopus'
        width={100}
        height={100}
      />
      <div>
        <span title='Basket items' className={styles.badge}>
          {getCartLength()}
        </span>
        <Image
          className={styles.basket}
          src='/basket.svg'
          alt='basket'
          width={30}
          height={30}
        />
      </div>
    </nav>
  );
}

export default MainNav;
