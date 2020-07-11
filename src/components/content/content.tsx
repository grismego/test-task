import React, { useEffect } from 'react';
import { TabsList } from '../tabs/tabs-list';
import { BookList } from '../book-list/book-list';
import style from './style.module.css';
import { BASE_URL } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../reducer/actions';
import { Filters } from '../filters/filters';

export const Content: React.FC = () => {
    const dispatch = useDispatch();
    const tags = useSelector((state: RootStore) => state.tags);

    useEffect(() => {
        fetch(BASE_URL)
            .then(respnse => respnse.json())
            .then(data => dispatch(fetchBooks(data.items)));
    }, [dispatch]);

    return (
        <div className={style.container}>
            <TabsList />
            {tags.length > 0 && <Filters />}
            <BookList />
        </div>
    );
};
