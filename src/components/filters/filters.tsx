import React from 'react';
import style from './style.module.css';
import { Hashtag } from '../hashtag/hashtag';
import { useSelector, useDispatch } from 'react-redux';
import { removeTag, removeAllTags } from '../../reducer/actions';

export const Filters: React.FC = () => {
    const tags = useSelector((state: RootStore) => state.tags);
    const dispatch = useDispatch();

    const removeTagHanlder = (tag: string) => dispatch(removeTag(tag));

    return (
        <div className={style.filters}>
            <span className={style.span}>Filters By:</span>
            {tags.map(tag => (
                <Hashtag tag={tag} key={tag} onRemoveTag={removeTagHanlder} />
            ))}
            <span className={style.clear} onClick={() => dispatch(removeAllTags())}>
                clear
            </span>
        </div>
    );
};
