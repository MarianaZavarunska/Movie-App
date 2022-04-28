//TODO: rename to avatar to avatarURL
export interface IUser {
  firstName: string;
  lastName: string;
  age?: number;
  phone: string;
  email: string;
  password: string;
  avatar?: string;
}

//TODO: rename to IUserRegisterModel
export interface IUserRegisterSubmit extends IUser
{ 
  avatarFile?: FileList
}

export interface IUserLogInResponse {
  userData: IUserData | undefined;
  status: number;
  error: string | undefined;
}

export interface IUserData{
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
