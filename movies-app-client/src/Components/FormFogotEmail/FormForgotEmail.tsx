import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { IUser } from '../../interfaces';
import { setModalActive, userForgotPassword } from '../../store/slices';
import "./FormForgotEmail.css";

const FormForgotEmail: FC = () => {
    const { register, handleSubmit } = useForm<{ email: string }>();
    const { status} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();
    
    const onSubmitForm = (data: Partial<IUser>) => {
        dispatch(userForgotPassword(data));
        console.log(status );
        
        // if(status === 204) dispatch(setModalActive({ isActive: false }));
        
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

export { FormForgotEmail};