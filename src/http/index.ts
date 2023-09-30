// NOTE : 프로젝트 전역에서 사용하기 위한 axios config

// type 키워드를 이용해 컴파일 시점에만 사용함을 컴파일러에게 알려줌
import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import router from "@/router";

import { log } from "@/utils";
import { ERROR_CODE } from "@/utils/constants/errorCode";
import refreshToken from "@/http/api/refreshToken";

const BASE_URL = "/api/v1";

// request
const config = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

class Http {
  // 속성
  #instance: AxiosInstance;
  #requestLog(request: InternalAxiosRequestConfig) {
    // request log
    if (!import.meta.env.DEV) return;

    const { method, url, data } = request;
    const requestUrl = `[${method?.toUpperCase()}] ${url}`;
    log(`🚀 request : ${requestUrl}`);

    if (data) {
      log("📦 request data ");
      log(data);
    }
  }
  #responseLog(response: AxiosResponse) {
    if (!import.meta.env.DEV) return;

    const requestUrl = response.request.responseURL.split(BASE_URL)[1] ?? null;
    const { data } = response;

    log(`📦 response : ${requestUrl}`);

    if (data) {
      log(data);
    }
  }

  // AxiosRequestConfig 타입만 들어올 수 있도록 타입 명시
  constructor(config: AxiosRequestConfig) {
    this.#instance = axios.create(config);
    this.#instance.interceptors.request.use(
      (request: InternalAxiosRequestConfig) => {
        // 요청 로그 출력
        this.#requestLog(request);
        return request;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    this.#instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 응답 로그 출력
        this.#responseLog(response);
        return response;
      },
      async (error) => {
        if (typeof error.response === "undefined") return;

        const originalRequest = error.config;
        const { errorCode, message, status } = error.response?.data;

        switch (errorCode) {
          case ERROR_CODE.AUTH.EXPIRED_TOKEN:
            {
              try {
                // 기존 AccessToken 삭제
                this.removeAuthorizationToken();

                // 새로운 AccessToken 발급 & 저장
                const newAccessToken = await refreshToken.getAccessToken();
                this.setAuthorizationToken(newAccessToken);

                // 기존 Request 재요청
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return this.#instance(originalRequest);
              } catch (error) {
                log(error);
              }
            }
            break;
          case ERROR_CODE.AUTH.EXPIRED_REFRESH_TOKEN:
            {
              try {
                await refreshToken.delete();
                // TODO : 로그인 시간이 만료되었습니다. 다시 로그인 해주세요. 안내 필요
                router.push("/");
              } catch (error) {
                log(error);
              }
            }
            break;
        }

        return Promise.reject(error);
      }
    );
  }

  setAuthorizationToken(accessToken: any) {
    log(accessToken);
    this.#instance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;
  }

  removeAuthorizationToken() {
    this.#instance.defaults.headers.common["Authorization"] = "";
  }

  // 공통으로 사용하는 요청 메서드 캡슐화
  //: Promise<T>
  async get<T>(url: string): Promise<T> {
    const { data } = await this.#instance.get<T>(url, config);
    return data;
  }
  async post<T>(url: string, data: any): Promise<T> {
    const { data: responseData } = await this.#instance.post<T>(url, data, {
      ...config,
      baseURL: BASE_URL,
    });
    return responseData;
  }
  async put<T>(url: string, data: any): Promise<T> {
    const { data: responseData } = await this.#instance.put<T>(url, data, {
      ...config,
      baseURL: BASE_URL,
    });
    return responseData;
  }
  async delete<T>(url: string): Promise<T> {
    const { data } = await this.#instance.delete<T>(url, {
      ...config,
      baseURL: BASE_URL,
    });
    return data;
  }
}

export default new Http(config);
