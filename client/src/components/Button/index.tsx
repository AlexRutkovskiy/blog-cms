import React from 'react';
import styles from './Button.module.css';

type buttonType = 'button' | 'submit';

interface IButtonProps {
    title: string;
    primary?: boolean;
    outline?: boolean;
    fullWidth?: boolean;
    negative?: boolean;
    type?: buttonType;
    onClick: (e: React.FormEvent) => void
}

export const Button: React.FC<IButtonProps> = ({
    primary = false,
    outline = false,
    title = 'Primary',
    fullWidth = false,
    negative = false,
    type = 'button',
    onClick = () => {},
    ...props
}) => {
    let buttonClass = `${styles.button}`;
    if (fullWidth) {
        buttonClass += ` ${styles.fullWidth}`;
    }
    if (primary) {
        buttonClass += ` ${styles.primary}`;
    }
    if (negative) {
        buttonClass += ` ${styles.negative}`;
    }
    if (outline) {
        buttonClass += ` ${styles.outline}`;
    }

    return (
        <button
            type={type}
            className={buttonClass}
            onClick={onClick}
            {...props}
        >
            {title}
        </button>
    );
};