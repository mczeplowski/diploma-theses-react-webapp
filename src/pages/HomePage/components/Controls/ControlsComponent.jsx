import React from 'react';
import useWindowScrollPosition from 'hooks/useWindowScrollPosition';
import styles from './Controls.module.scss';
import Search from './components/Search';
import Sorting from './components/Sorting';

export default function ControlsComponent() {
  const [windowYPosition] = useWindowScrollPosition();
  console.log(windowYPosition);

  return (
    <div className={styles.container}>
      <div className="container d-flex">
        <Search />
        <Sorting />
      </div>
    </div>
  )
}
