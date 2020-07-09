export const fetchBooksHandler = (state: RootStore, action: { payload: BookList[] }) => ({
    ...state,
    books: action.payload,
});
