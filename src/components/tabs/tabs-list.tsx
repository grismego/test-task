import React from 'react';
import { Tab } from '../tab/tab';

export const TabsList: React.FC = () => {
    return (
        <div className='tabs-list'>
            <Tab text={'To Read'} filter={'TO_READ'} />
            <Tab text={'In progress'} filter={'IN_PROGRESS'} />
            <Tab text={'Done'} filter={'DONE'} />
        </div>
    );
};
