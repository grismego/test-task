import React from 'react';
import styles from './style.module.css';
import { useDispatch } from 'react-redux';
import { addingTag } from '../../reducer/actions';

export const Hashtag = (props: { tag: string; onRemoveTag?: Function }) => {
    const { tag, onRemoveTag } = props;
    const dispatch = useDispatch();

    return (
        <span className={styles.hashtag} onClick={() => (onRemoveTag ? onRemoveTag(tag) : dispatch(addingTag(tag)))}>
            #{tag}
        </span>
    );
};
