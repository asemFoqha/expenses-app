import apiClient from "../../apiClient/apiClient";

export function login(group: string) {
  const controll = new AbortController();
  return apiClient.post("users/signin", group, {
    signal: controll.signal,
  });
}
