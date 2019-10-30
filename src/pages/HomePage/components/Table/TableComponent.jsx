import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Table.module.scss';
import { listSelector } from '../../state';
import Row from './components/Row';

const headerData = {
  surname: 'Surname',
  name: 'Name',
  topic: 'Topic',
  promoter: 'Promoter',
  defenseDate: 'Defense Date'
}

export default function TableComponent() {
  const theses = useSelector(listSelector);

  return (
    <div className={styles.container}>
      <div className="container d-flex flex-column">
        <Row data={headerData} />
        {theses.map(these => (
          <Row
            key={`table-these-${these._id}`}
            data={these}
          />
        ))}
      </div>
    </div>
  )
}
