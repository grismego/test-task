import React from 'react';
import { TabsList } from '../tabs/tabs-list';
import { BookList } from '../book-list/book-list';
import style from './style.module.css';

export const Content = () => {
    return (
        <div className={style.container}>
            <TabsList />
            <BookList />
        </div>
    );
};
