import React from 'react';
import styles from './Input.module.css';

type FieldType = 'text' | 'email' | 'password';

interface IFieldInput {
    label: string;
    type: FieldType;
    value: string;
    name: string;
    error: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input:React.FC<IFieldInput> = ({label, type, value, name, onChange, error}) => {
    const classNameLabel = !error ? `${styles.label}` : `${styles.label} ${styles.error}`;
    return (
        <label className={classNameLabel}>
            <input
                className={styles.input}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                autoComplete='off'
            />
            <span className={styles.labelContent}>{label}</span>
            {
                error && <span className={styles.errorContent}>{error}</span>
            }
        </label>
    );
};

export { Input };