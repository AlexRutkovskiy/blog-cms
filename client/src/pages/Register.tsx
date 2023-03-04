import React from 'react';
import { FaUserAlt } from 'react-icons/fa'
import { Input as InputField, Button } from '../components';
import {AUTH_FORM_NAMES} from '../utils/constans';
import styles from '../assets/style/Register.module.css';

interface IUserDataRegister {
    [AUTH_FORM_NAMES.FIRST_NAME]: string;
    [AUTH_FORM_NAMES.LAST_NAME]: string;
    [AUTH_FORM_NAMES.EMAIL]: string;
    [AUTH_FORM_NAMES.PASSWORD]: string;
    [AUTH_FORM_NAMES.CONFIRM_PASSWORD]: string;
}

const Register = () => {

    const [formData, setFormData] = React.useState<IUserDataRegister>({
        [AUTH_FORM_NAMES.FIRST_NAME]: '',
        [AUTH_FORM_NAMES.LAST_NAME]: '',
        [AUTH_FORM_NAMES.EMAIL]: '',
        [AUTH_FORM_NAMES.PASSWORD]: '',
        [AUTH_FORM_NAMES.CONFIRM_PASSWORD]: ''
    })

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }, []);

    const handleChangeField = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const field = e.target.name;
        setFormData(prevState => ({...prevState, [field]: e.target.value}));
    }, [])

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={styles.rowIcon}>
                    <FaUserAlt className={styles.icon} />
                </div>
                <div className={styles.row}>
                    <InputField
                        label='First name'
                        type='text'
                        value={formData[AUTH_FORM_NAMES.FIRST_NAME]}
                        name={AUTH_FORM_NAMES.FIRST_NAME}
                        error={''}
                        onChange={handleChangeField}
                    />
                    <InputField
                        label='Last name'
                        type='text'
                        value={formData[AUTH_FORM_NAMES.LAST_NAME]}
                        name={AUTH_FORM_NAMES.LAST_NAME}
                        error={''}
                        onChange={handleChangeField}
                    />
                </div>
                <div className={styles.row}>
                    <InputField
                        label='Password'
                        type='password'
                        value={formData[AUTH_FORM_NAMES.PASSWORD]}
                        name={AUTH_FORM_NAMES.PASSWORD}
                        error={''}
                        onChange={handleChangeField}
                    />
                    <InputField
                        label='Confirm password'
                        type='password'
                        value={formData[AUTH_FORM_NAMES.CONFIRM_PASSWORD]}
                        name={AUTH_FORM_NAMES.CONFIRM_PASSWORD}
                        error={''}
                        onChange={handleChangeField}
                    />
                </div>
                <div>
                    <InputField
                        label='Email'
                        type='email'
                        value={formData[AUTH_FORM_NAMES.EMAIL]}
                        name={AUTH_FORM_NAMES.EMAIL}
                        error={''}
                        onChange={handleChangeField}
                    />
                </div>
                <div>
                    <Button
                        title='Register'
                        onClick={()=>{}}
                    />
                </div>
            </form>
        </div>
    );
};

export default Register;