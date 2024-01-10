import apiClient from "../../apiClient/apiClient";

interface FetchResponse {
  data: string;
  success: boolean;
}

export interface LoginUser {
  email: string | undefined;
  password: string | undefined;
}

export function login(user: LoginUser | null) {
  const controll = new AbortController();
  return apiClient.post<FetchResponse>("users/signin", user, {
    signal: controll.signal,
  });
}
