import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Row.module.scss';

const TitledDiv = ({ text }) => <div title={text}>{text}</div>;

export default function RowComponent({ data }) {
    const { _id: id, surname, name, topic, promoter, defenseDate } = data;
    const date = defenseDate === 'Defense Date' ? defenseDate : new Date(defenseDate).toLocaleDateString('pl-PL');
    const content = (
        <>
            <TitledDiv text={surname} />
            <TitledDiv text={name} />
            <TitledDiv text={topic} />
            <TitledDiv text={promoter} />
            <TitledDiv text={date} />
        </>
    );

    if (!id) {
        return (
            <div className={styles.container}>
                {content}
            </div>
        )
    }
    return (
        <Link to={`/these/${id}`} className={styles.container}>
            {content}
        </Link>
    )
}