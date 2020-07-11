import React from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../reducer/actions';

export const Tab = (props: { text: string; filter: string }) => {
    const { text, filter } = props;
    const dispatch = useDispatch();
    const count = useSelector((state: RootStore) => state.books.filter(book => book.status === filter));

    return (
        <div className={style.tab} onClick={() => dispatch(changeFilter(filter))}>
            {text} ({count.length})
        </div>
    );
};
