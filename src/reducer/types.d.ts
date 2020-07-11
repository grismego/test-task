type Book = {
    id: string;
    author: string;
    description: string;
    title: string;
    tags: string[];
    status: 'TO_READ' | 'IN_PROGRESS' | 'DONE';
};

type BookList = Book[];

type RootStore = {
    books: BookList;
    filter: TO_READ | IN_PROGRESS | DONE;
    tags: string[];
};

type Action<T> = { type: string; payload: T };
