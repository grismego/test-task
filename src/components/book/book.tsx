import React from 'react';
import style from './style.module.css';
import { Hashtag } from '../hashtag/hashtag';

export const Book: React.FC = () => {
    return (
        <div className={style.book}>
            <div className={style.header}>
                <div>
                    <p className={style.author}>Author </p>
                    <p className={style.title}>Name Book</p>
                </div>
                <div className={style.statusContainer}>
                    <span className={style.status}>change status</span>
                    <span>→</span>
                </div>
            </div>
            <p className='book-description'>
                Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quae.
            </p>
            <div className={style.hashtags}>
                <Hashtag />
                <Hashtag />
                <Hashtag />
            </div>
        </div>
    );
};
