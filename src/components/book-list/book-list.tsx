import React from 'react';
import { Book } from '../book/book';
import { useSelector } from 'react-redux';
import { filteredBooks } from '../../reducer/selectors';
import style from './style.module.css';

export const BookList: React.FC = () => {
    const books = useSelector(filteredBooks);

    const EmptyList = () => <div className={style.emptyList}>List is Empty</div>;

    return (
        <div>
            {books.length ? (
                books.map((book: Book) => {
                    return <Book {...book} key={book.id} />;
                })
            ) : (
                <EmptyList />
            )}
        </div>
    );
};
