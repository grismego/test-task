import React from 'react';
import styles from './style.module.css';
import { useDispatch } from 'react-redux';
import { addingTag } from '../../reducer/actions';
import { useHistory } from 'react-router-dom';

export const Hashtag = (props: { tag: string; onRemoveTag?: Function; title?: string }) => {
    const { tag, onRemoveTag, title } = props;
    const dispatch = useDispatch();
    let history = useHistory();

    const handleClick = (tag: string) => {
        console.log(history);
        // history.push(`/tags=${tag}`, tag);
        dispatch(addingTag(tag));
    };

    return (
        <span
            className={styles.hashtag}
            title={title ? title : ''}
            onClick={() => (onRemoveTag ? onRemoveTag(tag) : handleClick(tag))}
        >
            #{tag}
        </span>
    );
};
