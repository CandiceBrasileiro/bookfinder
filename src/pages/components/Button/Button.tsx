import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    size?: String;
};

const ButtonMore = (props: ButtonProps) => {
    return (
        <button className={styles.container} onClick={props.onClick}>
            More
        </button>
    )
}

export default ButtonMore;