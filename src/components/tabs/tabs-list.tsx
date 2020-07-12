import React from 'react';
import { Tab } from '../tab/tab';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';
import { changeFilter } from '../../reducer/actions';
import { useDispatch } from 'react-redux';

export const TabsList: React.FC = () => {
    const dispatch = useDispatch();

    const detectActiveTab = (location: any, filter: string) => {
        const params = new URLSearchParams(location.search);
        if (params.get('tab') === filter.toLowerCase() || (filter === 'TO_READ' && params.get('tab') === null)) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className='tabs-list'>
            <NavLink
                to='/'
                className={style.link}
                isActive={(match, location) => detectActiveTab(location, 'TO_READ')}
                activeClassName={style.active}
                onClick={() => dispatch(changeFilter('TO_READ'))}
            >
                <Tab text={'To Read'} filter={'TO_READ'} />
            </NavLink>
            <NavLink
                to='/?tab=in_progress'
                className={style.link}
                isActive={(match, location) => detectActiveTab(location, 'IN_PROGRESS')}
                activeClassName={style.active}
                onClick={() => dispatch(changeFilter('IN_PROGRESS'))}
            >
                <Tab text={'In progress'} filter={'IN_PROGRESS'} />
            </NavLink>
            <NavLink
                to='/?tab=done'
                className={style.link}
                isActive={(match, location) => detectActiveTab(location, 'DONE')}
                activeClassName={style.active}
                onClick={() => dispatch(changeFilter('DONE'))}
            >
                <Tab text={'Done'} filter={'DONE'} />
            </NavLink>
        </div>
    );
};
