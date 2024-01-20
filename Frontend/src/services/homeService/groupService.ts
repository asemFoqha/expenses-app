import apiClient from "../../apiClient/apiClient";

interface FetchResponse {
  data: Group[];
  success: boolean;
}

interface AddResponse {
  data: Group;
  success: boolean;
}

export interface Group {
  _id: string;
  title: string;
  __v?: number;
}

export function getGroups() {
  const controll = new AbortController();
  return apiClient.get<FetchResponse>("groups", {
    signal: controll.signal,
  });
}

export function addGroup(title: string) {
  const controll = new AbortController();
  return apiClient.post<AddResponse>(
    "groups",
    { title },
    {
      signal: controll.signal,
    }
  );
}
