import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch} from "../../hooks";
import {IUser, IUserLogInResponse, IUserRegisterSubmit} from "../../interfaces";
import { setModalActive, setRegisterActive, userRegistartion } from '../../store/slices';
import "./FormRegister.css";


const FormRegister: FC = () => {
   const {register,handleSubmit,reset}= useForm<IUserRegisterSubmit>();
   const dispatch = useAppDispatch();

    const onSubmitForm: SubmitHandler<IUserRegisterSubmit> =
        async (data: IUser) => {
         
            let res = await dispatch(userRegistartion(data));
            
            //TODO: handle errors when email is exists etc
            if ((res.payload as Partial<IUserLogInResponse>)?.userData?.accessToken) {
                dispatch(setRegisterActive({isActive: false}));
                dispatch(setModalActive({ isActive: false }));
            } 
        
            reset();
        }
   

    return (
        <div>
            <form className="form-register" onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                   <label>FirstName:</label>
                   <input type="text" {...register("firstName")}/>
                </div>
                <div>
                   <label> LastName:</label>
                   <input type="text" {...register("lastName")}/>
                </div>

                <div>
                 <label>Phone:</label>
                  <input type="text" {...register("phone")}/> 
                </div>
           
                <div>
                <label> Age:  </label>
                <input type="text" {...register("age")}/>
                </div>
            
                <div>
                <label> Email: </label>
                <input type="text" {...register("email")}/>
                </div>
           
                <div>
                <label> Password:</label>
                <input type="text" {...register("password")}/>
                </div>
                <div>
                    <label>Photo </label> 
                    <input type="file" {...register("avatarFile")}/>
                </div>
               
              
             <button type="submit">Sign In</button>
         </form>
        </div>
    );
};

export {FormRegister};