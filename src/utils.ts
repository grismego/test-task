export const fetchData = (url: string) => {
    return fetch(url).then(respnse => respnse.json());
};

export const isIdEqual = (prevProps: any, nextProps: any) => prevProps.id === nextProps.id;
