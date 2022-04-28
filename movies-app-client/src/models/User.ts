import { IUser } from "../interfaces";

export class User implements IUser {
  firstName: string;
  lastName: string;
  age?: number | undefined;
  phone: string;
  email: string;
  password: string;
  avatar: string | undefined;

  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.age = 18;
    this.phone = "";
    this.email = "";
    this.password = "";
    this.avatar = "";
  }
}
