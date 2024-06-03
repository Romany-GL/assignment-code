import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';

function MainNav() {
  return (
    <nav className={styles.mainNav}>
      <Image
        className={styles.logo}
        src='/octopus-logo.svg'
        alt='Octopus'
        width={100}
        height={100}
      />

      <Image
        className={styles.basket}
        src='/basket.svg'
        alt='basket'
        width={30}
        height={30}
      />
    </nav>
  );
}

export default MainNav;
