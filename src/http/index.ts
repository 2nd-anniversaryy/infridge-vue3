// NOTE : 프로젝트 전역에서 사용하기 위한 axios config

// type 키워드를 이용해 컴파일 시점에만 사용함을 컴파일러에게 알려줌
import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import { log } from "@/utils";

// request
const config = {
  baseURL: "/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
};

class Http {
  // 속성
  #instance: AxiosInstance;
  #requestLog(request: InternalAxiosRequestConfig) {
    // request log
    if (!import.meta.env.DEV) return;

    log("🚀 request");
    const { method, url, params, data } = request;

    let queryOrParams = "";
    if (params) {
      queryOrParams = Object.keys(params)
        .filter((k) => params[k] != null)
        .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
        .join("&");
      queryOrParams = `${queryOrParams}?queryOrParams`;
    }

    const requestUrl = `[${method?.toUpperCase()}] ${url}${queryOrParams}`;
    log(requestUrl);

    if (data) {
      log("📦 request data ");
      log(data);
    }
  }
  #responseLog(response: AxiosResponse) {
    if (!import.meta.env.DEV) return;

    // const requestUrl = response.request.responseURL.split(BASE_URL)[1] ?? null;
    const { data } = response;

    // log(`📦 response : ${requestUrl}`);

    if (data) {
      log(data);
    }
  }
  // TODO : 인증관련 기능 구현

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
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }

  // 공통으로 사용하는 요청 메서드 캡슐화
  get<T>(url: string): Promise<T> {
    return this.#instance.get(url);
  }
  post<T>(url: string, data: any): Promise<T> {
    return this.#instance.post(url, data);
  }
  put<T>(url: string, data: any): Promise<T> {
    return this.#instance.put(url, data);
  }
  delete<T>(url: string): Promise<T> {
    return this.#instance.delete(url);
  }
}

export default new Http(config);
