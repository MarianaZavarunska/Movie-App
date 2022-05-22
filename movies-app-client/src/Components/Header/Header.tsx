import { FC } from "react";
import { Link } from "react-router-dom";

import { Form, GenreList, UserInfo, Logo, ThemeSwitcher, FormForgotPassword, FormLogIn,  FormRegister } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setLogInActive, setModalActive, setOutToken, setRegisterActive, setYearFilter } from "../../store/slices";

import ModalWindow from "../ModalWindow/ModalWindow";
import "./Header.css";
import "./Header.responsive.css";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { isSwitched } = useAppSelector((state) => state.moviesReducer);
  const { isRegisterActive, isLogInActive,  isForgotPassword} = useAppSelector((state) => state.userReducer);
  const { accessToken } = useAppSelector((state) => state.userReducer);

  return (
    <div
      className="header"
      style={{
        backgroundColor: isSwitched ? "#02286e" : "#05020D",
      }}
    >
      <Logo />

      <ThemeSwitcher />

      <div>
        <button
          className="year-container"
          style={{ backgroundColor: isSwitched ? "#05020D" : "#02286e" }}
          onClick={() => dispatch(setYearFilter())}
        >
          The Latest
        </button>
      </div>

      <GenreList />
      <Form />
      <UserInfo />
          
     <div className="log-btn" >
     <Link to={'profile'} style={{ display: accessToken ? "block" : "none" , color: "white"}}> 
      Profile
      </Link> 
          </div>
          
      <button
        className="log-btn"
        style={{ backgroundColor: isSwitched ? "#05020D" : "#02286e" }}
        onClick={() => {
          if (accessToken) dispatch(setOutToken());
          else {
            dispatch(setModalActive({ isActive: true}));
            dispatch(setLogInActive({ isActive: true }));
            dispatch(setRegisterActive({ isActive: false }));
          }
        }}
      >
        {accessToken ? "Log Out" : "Log In"}
          </button>
          
    
      <ModalWindow>
        {isRegisterActive ? <FormRegister/> :  isLogInActive ? <FormLogIn /> : isForgotPassword ? <FormForgotPassword/> : null}
      </ModalWindow>
    
    </div>
  );
};

export { Header };
