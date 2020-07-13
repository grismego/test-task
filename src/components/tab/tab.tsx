import React from 'react';
import style from './style.module.css';
import { useSelector } from 'react-redux';

export const Tab: React.FC<{ text: string; filter: string }> = props => {
    const { text, filter } = props;

    const count = useSelector((state: RootStore) => state.books.filter(book => book.status === filter));

    return (
        <div className={style.tab}>
            {text} ({count.length})
        </div>
    );
};
