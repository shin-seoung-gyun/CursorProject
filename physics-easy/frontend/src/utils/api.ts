import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { ApiResponse, AppError } from '../types';

// API 기본 URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

// Axios 인스턴스 생성
const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => {
    // 필요시 토큰 추가 등
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const appError: AppError = {
      message: error.message || '알 수 없는 오류가 발생했습니다.',
      code: error.code,
      status: error.response?.status,
    };

    // 서버에서 오는 에러 메시지 처리
    if (error.response?.data) {
      const data = error.response.data as any;
      appError.message = data.message || data.error || appError.message;
    }

    return Promise.reject(appError);
  }
);

// API 호출 래퍼 함수
export const api = {
  get: async <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiClient.get<ApiResponse<T>>(url, config);
    return response.data.data || response.data;
  },

  post: async <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await apiClient.post<ApiResponse<T>>(url, data, config);
    return response.data.data || response.data;
  },

  put: async <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await apiClient.put<ApiResponse<T>>(url, data, config);
    return response.data.data || response.data;
  },

  delete: async <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiClient.delete<ApiResponse<T>>(url, config);
    return response.data.data || response.data;
  },
};

export default apiClient;
