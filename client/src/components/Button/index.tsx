import React from 'react';
import styles from './Button.module.css';

interface IButtonProps {
    title: string;
    primary?: boolean;
    outline?: boolean;
    fullWidth?: boolean;
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<IButtonProps> = ({
    primary = true,
    outline = false,
    title = 'Primary',
    fullWidth = true,
    onClick = () => {}
}) => {
    return (
        <button
            onClick={onClick}
        >
            {title}
        </button>
    );
};