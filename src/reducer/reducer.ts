import { FETCH_BOOKS } from './action-types';
import { fetchBooks } from './actions';

export const initialState: RootStore = {
    books: [],
};

const actionHandler = new Map<string, any>([
    [FETCH_BOOKS, fetchBooks],
    ['DEFAULT', () => initialState],
]);

export function rootReducer(state = initialState, action: Action<any>) {
    const reducer = actionHandler.has(action.type) ? actionHandler.get(action.type) : actionHandler.get('DEFAULT');
    return reducer(state, action);
}
