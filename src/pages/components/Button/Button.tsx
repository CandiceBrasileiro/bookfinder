import React from 'react';
import styles from './Button.module.css';
import { IoIosArrowForward } from "react-icons/io";

type ButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    size?: String;
};

const ButtonMore = (props: ButtonProps) => {
    return (
        <button className={styles.container} onClick={props.onClick}>
            More <IoIosArrowForward className={styles.icon} />
        </button>
    )
}

export default ButtonMore;