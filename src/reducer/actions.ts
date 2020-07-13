import {
    FETCH_BOOKS,
    CHANGE_STATUS,
    CHANGE_FILTER,
    ADDING_TAG,
    REMOVE_TAG,
    REMOVE_ALL_TAGS,
    RESET_APP,
} from './action-types';

export const fetchBooks = (books: BookList[]) => ({
    type: FETCH_BOOKS,
    payload: books,
});

export const toggleStatus = (id: string, status: string) => ({
    type: CHANGE_STATUS,
    payload: id,
    status,
});

export const changeFilter = (filter: string) => ({
    type: CHANGE_FILTER,
    payload: filter,
});

export const addingTag = (tag: string) => ({
    type: ADDING_TAG,
    payload: tag,
});

export const removeTag = (tag: string) => ({
    type: REMOVE_TAG,
    payload: tag,
});

export const removeAllTags = () => ({
    type: REMOVE_ALL_TAGS,
});

export const resetApp = { type: RESET_APP, payload: null };
