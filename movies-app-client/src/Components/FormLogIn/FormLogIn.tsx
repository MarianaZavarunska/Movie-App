import React, { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { useAppDispatch} from "../../hooks";
import { IUser, IUserLogInResponse } from "../../interfaces";
import { setLogInActive, setModalActive, setRegisterActive, userLogIn } from "../../store/slices";
import { userValidator } from "../../validators/user.validator";
import "./FormLogIn.css";


const FormLogIn: FC = () => {
  const { register, handleSubmit, reset ,  formState: { errors }, setValue} = useForm<{
    email: string;
    password: string;
  }>({ resolver: joiResolver(userValidator.logIn), mode: "onTouched" });


  const dispatch = useAppDispatch();

  const onSubmitForm = async (data: Partial<IUser>) => {

    let res = await dispatch(userLogIn(data));
    
    if((res.payload as Partial<IUserLogInResponse>)?.userData?.accessToken) dispatch(setModalActive({ isActive: false}));
    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)} className="logIn-form">
        <div className="logIn-content">
          <label>Login</label>
          <input type="text" {...register("email")} />

          {errors.email && (
            <div className="error-container">{errors.email.message}</div>
          )}
        </div>
        <div className="logIn-content">
          <label>Password</label>
          <input type="text" {...register("password")} />

          {errors.password && (
            <div className="error-container">{errors.password.message}</div>
          )}
        </div>
        <div className="btn-container">
        <button type="submit">Log In</button>
        <button onClick={() => {dispatch(setRegisterActive({isActive: true}));dispatch(setLogInActive({ isActive: false }));} }>Sign Up</button>
        </div>
       
      </form>
    
     
    </div>
  );
};

export default FormLogIn;
