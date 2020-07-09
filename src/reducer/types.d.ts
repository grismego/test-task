type Book = {
    id: string;
    author: string;
    description: string;
    title: string;
    hashtags?: string[];
};

type BookList = Book[];

type RootStore = {
    books: BookList;
};

type Action<T> = { type: string; payload: T };
