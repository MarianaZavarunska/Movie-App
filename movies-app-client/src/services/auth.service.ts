import { AxiosResponse } from "axios";

import { backURL} from "../constants/backendUrls";
import axiosTepmlate from "../http/axios";
import { IUser, IUserData, IUserRegisterSubmit } from "../interfaces";

class AuthService {
  public async login(
    data: Partial<IUser>
  ): Promise<AxiosResponse<IUserData>> {
    return axiosTepmlate.post<IUserData>(`${backURL.login}`, data);
  }

  public async registartion(
    data: IUserRegisterSubmit
  ): Promise<AxiosResponse<IUserData>> {
    // Create an object of formData
    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      if (key === 'avatarFile') continue;

      formData.set(key, value)
    }
    data.avatarFile &&
    formData.append(
      "avatarFile",
      data.avatarFile[0],
      data.avatarFile[0].name
      );
    
    return axiosTepmlate.post<IUserData>(
      `${backURL.registartion}`, formData);
  }

  public async logout(): Promise<string> {
    return axiosTepmlate.post(`${backURL.logout}`);
  }
}

export const authService = new AuthService();
