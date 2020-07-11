export const BASE_URL = 'https://raw.githubusercontent.com/lastw/test-task/master/data/10-items.json';

export enum Statuses {
    TO_READ = 'Start reading',
    IN_PROGRESS = 'Fininsh reading',
    DONE = 'return "To Read',
}

export enum NextStatus {
    TO_READ = 'IN_PROGRESS',
    IN_PROGRESS = 'DONE',
    DONE = 'TO_READ',
}
