import React from 'react';
import { TabsList } from '../tabs/tabs-list';
import { BookList } from '../book-list/book-list';
import style from './style.module.css';

import { useSelector } from 'react-redux';

import { Filters } from '../filters/filters';
import { RouteComponentProps } from 'react-router-dom';

export const Content: React.FC<RouteComponentProps> = props => {
    const tags = useSelector((state: RootStore) => state.tags);

    return (
        <div className={style.container}>
            <TabsList />
            {tags.length > 0 && <Filters />}
            <BookList />
        </div>
    );
};
