export const fetchBooksHandler = (state: RootStore, action: { payload: BookList[] }) => ({
    ...state,
    books: action.payload.map(book => ({ ...book, status: 'TO_READ' })),
});

export const changeFilterHandler = (state: RootStore, action: { payload: string }) => ({
    ...state,
    filter: action.payload,
});

export const changeStatusHandler = (state: RootStore, action: { payload: string; status: string }) => {
    const { status, payload } = action;
    return {
        ...state,
        books: state.books.map(book => (book.id === payload ? { ...book, status } : book)),
    };
};

export const addingTagHandler = (state: RootStore, action: { payload: string }) => ({
    ...state,
    tags: [...new Set([...state.tags, action.payload])],
});

export const removeTagHandler = (state: RootStore, action: { payload: string }) => ({
    ...state,
    tags: [...state.tags.filter(tag => tag !== action.payload)],
});

export const removeAllTagsHandler = (state: RootStore) => ({
    ...state,
    tags: [],
});
