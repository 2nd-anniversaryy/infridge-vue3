import { defineStore } from "pinia";
import { AxiosError } from "axios";

import tokenApi from "@/http/api/refreshToken";
import http from "@/http";
import { log } from "@/utils";

export const useTokenStore = defineStore("token", () => {
  const getAccessToken = async () => {
    try {
      const accessToken = await tokenApi.getAccessToken();
      if (accessToken) {
        http.setAuthorizationToken(accessToken);
        return true;
      }
      return false;
    } catch (error) {}
  };

  const deleteAccessToken = async () => {
    try {
      await tokenApi.delete();
      http.removeAuthorizationToken();
    } catch (e) {
      const axiosError = e as AxiosError;
      console.log(axiosError.response?.data);
    }
  };
  return {
    deleteAccessToken,
    getAccessToken,
  };
});
