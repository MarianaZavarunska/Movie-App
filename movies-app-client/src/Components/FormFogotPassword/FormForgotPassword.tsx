import { FC } from 'react';
import { useForm } from 'react-hook-form';

// import { useAppDispatch } from '../../hooks';
import { IUser } from '../../interfaces';
import "./FormForgotPassword.css";

const FormForgotPassword: FC = () => {
    const { register, handleSubmit } = useForm<{ email: string }>();
    // const dispatch = useAppDispatch();
    
    const onSubmitForm = (data: Partial<IUser>) => {

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitForm)} className="email-form">
                <label>Email:</label>
                <input type="text" {...register("email")} />
                <button>Sent</button>
            </form>
            
        </>
    );
};

export { FormForgotPassword };