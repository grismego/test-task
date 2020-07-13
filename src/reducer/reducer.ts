import {
    FETCH_BOOKS,
    CHANGE_FILTER,
    CHANGE_STATUS,
    ADDING_TAG,
    REMOVE_TAG,
    REMOVE_ALL_TAGS,
    RESET_APP,
} from './action-types';
import {
    fetchBooksHandler,
    changeFilterHandler,
    changeStatusHandler,
    addingTagHandler,
    removeTagHandler,
    removeAllTagsHandler,
    resetAppHandler,
    restoreStateHandler,
} from './handlers';

export const initialState: RootStore = {
    books: [],
    filter: 'TO_READ',
    tags: [],
};

const loadState = () => {
    try {
        const serialisedState = window.localStorage.getItem('app_state');

        if (!serialisedState) {
            return initialState;
        }

        return JSON.parse(serialisedState);
    } catch (err) {
        return initialState;
    }
};

const stateLocal = loadState();

const actionHandler = new Map<string, any>([
    [FETCH_BOOKS, fetchBooksHandler],
    [CHANGE_FILTER, changeFilterHandler],
    [CHANGE_STATUS, changeStatusHandler],
    [ADDING_TAG, addingTagHandler],
    [REMOVE_TAG, removeTagHandler],
    [REMOVE_ALL_TAGS, removeAllTagsHandler],
    [RESET_APP, resetAppHandler],
    ['DEFAULT', restoreStateHandler],
]);

export function rootReducer(state = stateLocal, action: Action<any>) {
    const reducer = actionHandler.has(action.type) ? actionHandler.get(action.type) : actionHandler.get('DEFAULT');
    return reducer(state, action);
}
