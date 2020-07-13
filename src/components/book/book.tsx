import React, { memo } from 'react';
import style from './style.module.css';
import { Hashtag } from '../hashtag/hashtag';
import { useDispatch } from 'react-redux';
import { toggleStatus } from '../../reducer/actions';
import { NextStatus, Statuses } from '../../constants/constants';
import { isIdEqual } from '../../utils';

export const Book: React.FC<Book> = memo(({ id, author, description, title, tags, status }) => {
    const dispatch = useDispatch();
    return (
        <article className={style.book}>
            <div className={style.header}>
                <div className={style.headerAuthor}>
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
                    <span> {Statuses[status] === 'return "To Read"' ? '↲' : '→'}</span>
                </div>
            </div>
            {description && <p className={style.description}>{description}</p>}
            <div className={style.hashtags}>
                {tags &&
                    tags.map((tag: string) => {
                        return <Hashtag tag={tag} key={tag + id} title='Add tag' />;
                    })}
            </div>
        </article>
    );
}, isIdEqual);
