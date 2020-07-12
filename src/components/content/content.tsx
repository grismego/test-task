import React, { useEffect } from 'react';
import { TabsList } from '../tabs/tabs-list';
import { BookList } from '../book-list/book-list';
import style from './style.module.css';
import { BASE_URL } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, changeFilter } from '../../reducer/actions';
import { Filters } from '../filters/filters';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';

export const Content: React.FC<RouteComponentProps> = props => {
    const dispatch = useDispatch();
    const tags = useSelector((state: RootStore) => state.tags);

    // useEffect(() => {
    //     fetch(BASE_URL)
    //         .then(respnse => respnse.json())
    //         .then(data => dispatch(fetchBooks(data.items)));
    // }, [dispatch]);

    // useEffect(() => {
    //     // const tab = params.get('tab');
    //     // params.get('tab') && dispatch(changeFilter(tab ? tab.toUpperCase() : ''));
    //     const values = queryString.parse(props.location.search);

    //     if (values.tab) {
    //         const { tab }: any = values;
    //         dispatch(changeFilter(tab.toUpperCase()));
    //     }

    //     // console.log(values);
    // }, []);

    return (
        <div className={style.container}>
            <TabsList />
            {tags.length > 0 && <Filters />}
            <BookList />
        </div>
    );
};
