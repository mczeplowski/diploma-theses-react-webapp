import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Pagination.module.scss';
import { pageSelector, limitSelector, paginationPagesSelector, setLimit, setPage } from '../../state';

export default function PaginationComponent() {
    const dispatch = useDispatch();
    const page = useSelector(pageSelector);
    const limit = useSelector(limitSelector);
    const paginationPages = useSelector(paginationPagesSelector);
    const handlePageChange = e => dispatch(setPage(Number(e.target.value)));
    const handlePrevPageClick = () => dispatch(setPage(page - 1));
    const handleNextPageClick = () => dispatch(setPage(page + 1));
    const handleLimitChange = e => dispatch(setLimit(Number(e.target.value)));
    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <button onClick={handlePrevPageClick}>
                    {'<'}
                </button>
                <div className={styles.inputContainer}>
                    <input
                        onChange={handlePageChange}
                        value={page}
                    />
                    z {paginationPages}
                </div>
                <button onClick={handleNextPageClick}>
                    >
                </button>
            </div>
            <div className={styles.limitContainer}>
                <span>Theses per page:</span>
                <input
                    onChange={handleLimitChange}
                    value={limit}
                />
            </div>
        </div>
    )
}