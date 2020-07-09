import { FETCH_BOOKS } from './action-types';

export const fetchBooks = (books: BookList[]) => ({
    type: FETCH_BOOKS,
    payload: books,
});
