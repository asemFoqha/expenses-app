import { AxiosResponse } from "axios";
import apiClient from "../../apiClient/apiClient";
import User from "../../interfaces/User";

interface FetchResponse {
  data: string;
  success: boolean;
}

export interface LoginUser {
  email: string | undefined;
  password: string | undefined;
}

export interface SignupUser {
  email?: string;
  fullname?: string;
  password?: string;
}
export interface SignupUserResponse {
  user: User;
  token: string;
}

export function login(user: LoginUser | null) {
  const controll = new AbortController();
  return apiClient.post<FetchResponse>("users/signin", user, {
    signal: controll.signal,
  });
}
export function signup(user: SignupUser | null) {
  const controll = new AbortController();
  return apiClient.post<AxiosResponse<SignupUserResponse>>(
    "users/signup",
    user,
    {
      signal: controll.signal,
    }
  );
}
