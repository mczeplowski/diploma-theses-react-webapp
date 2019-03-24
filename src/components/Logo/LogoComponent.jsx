import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

function LogoComponent() {
  return (
    <Link
      to="/"
      className={styles.container}
    >
      <span>Diploma</span>
      <span>Theses</span>
    </Link>
  )
}

export default LogoComponent;