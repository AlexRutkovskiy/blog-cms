import React from 'react';
import {Link} from "react-router-dom";
import styles from '../assets/style/Login.module.css'
import { FaSignInAlt } from 'react-icons/fa'
import {AUTH_FORM_NAMES} from "../utils/constans";
import {Button, Input as InputField} from "../components";
import {ROUTES} from "../routes";

interface IUserDataLogin {
    [AUTH_FORM_NAMES.EMAIL]: string;
    [AUTH_FORM_NAMES.PASSWORD]: string;
}

const Login = () => {

    const [formData, setFormData] = React.useState<IUserDataLogin>({
        [AUTH_FORM_NAMES.EMAIL]: '',
        [AUTH_FORM_NAMES.PASSWORD]: ''
    })

    const handleChangeField = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const field = e.target.name;
        setFormData(prevState => ({...prevState, [field]: e.target.value}));
    }, []);

    return (
        <div className={styles.container}>
            <form onSubmit={()=>{}}>
                <div className={styles.rowIcon}>

                    <FaSignInAlt className={styles.icon} />
                </div>
                <InputField
                    label='Email'
                    type='email'
                    value={formData[AUTH_FORM_NAMES.EMAIL]}
                    name={AUTH_FORM_NAMES.EMAIL}
                    error={''}
                    onChange={handleChangeField}
                />
                <InputField
                    label='Password'
                    type='password'
                    value={formData[AUTH_FORM_NAMES.PASSWORD]}
                    name={AUTH_FORM_NAMES.PASSWORD}
                    error={''}
                    onChange={handleChangeField}
                />
                <p className={styles.description}>
                    If you are already registered - <Link to={ROUTES.AUTH.REGISTER}>Register</Link>
                </p>
                <div className={styles.rowManage}>
                    <Button
                        title='Login'
                        type='submit'
                        fullWidth={true}
                        onClick={()=>{}}
                    />
                </div>
            </form>
        </div>
    );
};

export default Login;