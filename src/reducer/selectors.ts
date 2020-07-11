import { createSelector } from 'reselect';

const booksSelector = (state: RootStore) => state.books;

const filterSelector = (state: RootStore) => state.filter;

const tagsSelector = (state: RootStore) => state.tags;

export const booksToReadSelector = createSelector(booksSelector, books =>
    books.map(book => ({ ...book, status: 'TO_READ' }))
);

export const filteredBooksByFilter = createSelector(booksSelector, filterSelector, (books, filter) => {
    return books.filter(({ status }) => status === filter);
});

export const filteredBooks = createSelector(filteredBooksByFilter, tagsSelector, (books, tags) => {
    return books.filter(book => tags.every(tag => book.tags.includes(tag)));
});
