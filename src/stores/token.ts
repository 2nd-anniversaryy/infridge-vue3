import { defineStore } from "pinia";
import { AxiosError } from "axios";

import tokenApi from "@/http/api/refreshToken";
import http from "@/http";
import { log } from "@/utils";

export const useTokenStore = defineStore("token", () => {
  const getAccessToken = async () => {
    try {
      return await tokenApi.getAccessToken();
    } catch (e) {
      // TODO : 만료 토큰 시 로그인 페이지 이동
      const axiosError = e as AxiosError;
      log(axiosError.response?.data);
    }
  };

  const setAccessToken = (accessToken: any) => {
    http.setAuthorizationToken(accessToken);
  };

  const deleteAccessToken = async () => {
    try {
      await tokenApi.delete();
    } catch (e) {
      const axiosError = e as AxiosError;
      console.log(axiosError.response?.data);
    }
  };
  return {
    deleteAccessToken,
    getAccessToken,
    setAccessToken,
  };
});
