import React from 'react';
import { Book } from '../book/book';

export const BookList: React.FC = () => {
    return (
        <div>
            <Book />
            <Book />
            <Book />
        </div>
    );
};
