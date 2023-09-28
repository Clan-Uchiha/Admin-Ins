export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string,
  otp_enabled: string;
}

export interface GenericResponse {
  status: string;
  message: string;
}

export interface ILoginResponse {
  status: string;
  user: IUser;
}
