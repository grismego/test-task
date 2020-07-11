import { FETCH_BOOKS, CHANGE_FILTER, CHANGE_STATUS, ADDING_TAG, REMOVE_TAG, REMOVE_ALL_TAGS } from './action-types';
import {
    fetchBooksHandler,
    changeFilterHandler,
    changeStatusHandler,
    addingTagHandler,
    removeTagHandler,
    removeAllTagsHandler,
} from './handlers';

export const initialState: RootStore = {
    books: [],
    filter: 'TO_READ',
    tags: [],
};

const actionHandler = new Map<string, any>([
    [FETCH_BOOKS, fetchBooksHandler],
    [CHANGE_FILTER, changeFilterHandler],
    [CHANGE_STATUS, changeStatusHandler],
    [ADDING_TAG, addingTagHandler],
    [REMOVE_TAG, removeTagHandler],
    [REMOVE_ALL_TAGS, removeAllTagsHandler],
    ['DEFAULT', () => initialState],
]);

export function rootReducer(state = initialState, action: Action<any>) {
    const reducer = actionHandler.has(action.type) ? actionHandler.get(action.type) : actionHandler.get('DEFAULT');
    return reducer(state, action);
}
