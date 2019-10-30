import React from 'react';
import styles from './Row.module.scss';

const TitledDiv = ({ text }) => <div title={text}>{text}</div>;

export default function RowComponent({ data }) {
    const { surname, name, topic, promoter, defenseDate } = data;
    const date = defenseDate === 'Defense Date' ? defenseDate : new Date(defenseDate).toLocaleDateString('pl-PL');
    return (
        <div className={styles.container}>
            <TitledDiv text={surname} />
            <TitledDiv text={name} />
            <TitledDiv text={topic} />
            <TitledDiv text={promoter} />
            <TitledDiv text={date} />
        </div>
    )
}