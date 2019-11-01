import React from 'react';
import useThese from '../../hooks/useThese';
import styles from './ThesePage.module.scss';

export default function ThesePageComponent({ id }) {
    const [these, isLoading] = useThese(id);

    if (isLoading) {
        return null;
    }

    const { name, surname, defenseDate, promoter, reviewer, topic, field, specialty, studies } = these;
    const date = defenseDate === 'Defense Date' ? defenseDate : new Date(defenseDate).toLocaleDateString('pl-PL');
    const infos = [
        {
            title: 'Name',
            value: name,
        },
        {
            title: 'Surname',
            value: surname,
        },
        {
            title: 'Topic',
            value: topic,
        },
        {
            title: 'Promoter',
            value: promoter,
        },
        {
            title: 'Reviewer',
            value: reviewer,
        },
        {
            title: 'Field',
            value: field,
        },
        {
            title: 'Specialty',
            value: specialty,
        },
        {
            title: 'Studies',
            value: studies,
        },
        {
            title: 'Defense date',
            value: date,
        },
    ];

    return (
      <div className={`container ${styles.container}`}>
        {infos.map(i => (
            <div key={i.title}>
                <span>{i.title}: </span>
                <span>{i.value}</span>
            </div>
        ))}
      </div>
    );
}