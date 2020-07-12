import React, { memo } from 'react';
import style from './style.module.css';
import { Hashtag } from '../hashtag/hashtag';
import { useDispatch } from 'react-redux';
import { toggleStatus } from '../../reducer/actions';
import { NextStatus, Statuses } from '../../constants/constants';
import { isIdEqual } from '../../utils';

export const Book = memo(({ id, author, description, title, tags, status }: Book) => {
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
                        return <Hashtag tag={tag} key={tag + id} title='Add tag' />;
                    })}
            </div>
        </div>
    );
}, isIdEqual);
