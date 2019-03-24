import React from 'react';
import styles from './Header.module.scss';
import Logo from 'components/Logo/LogoComponent';

function HeaderComponent() {
  return (
    <header className={styles.container}>
      <div className="container">
        <Logo />
      </div>
    </header>
  )
}

export default HeaderComponent;