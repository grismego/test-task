import React from 'react';
import style from './style.module.css';
import { Hashtag } from '../hashtag/hashtag';
import { useDispatch } from 'react-redux';
import { toggleStatus } from '../../reducer/actions';
import { NextStatus, Statuses } from '../../constants/constants';

export const Book = ({ id, author, description, title, tags, status }: Book) => {
    const dispatch = useDispatch();

    return (
        <div className={style.book}>
            <div className={style.header}>
                <div>
                    <p className={style.author}> {author} </p>
                    <p className={style.title}> {title} </p>
                </div>
                <div
                    className={style.statusContainer}
                    onClick={() => {
                        dispatch(toggleStatus(id, NextStatus[status]));
                    }}
                >
                    <span className={style.status}>{Statuses[status]}</span>
                    <span>→</span>
                </div>
            </div>
            <p className='book-description'>{description}</p>
            <div className={style.hashtags}>
                {tags &&
                    tags.map((tag: string) => {
                        return <Hashtag tag={tag} key={tag + id} />;
                    })}
            </div>
        </div>
    );
};
