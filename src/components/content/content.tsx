import React, { useEffect } from 'react';
import { TabsList } from '../tabs/tabs-list';
import { BookList } from '../book-list/book-list';
import style from './style.module.css';
import { BASE_URL } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../reducer/actions';

export const Content: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        dispatch(fetchBooks(data.items));
    };

    return (
        <div className={style.container}>
            <TabsList />
            <BookList />
        </div>
    );
};
