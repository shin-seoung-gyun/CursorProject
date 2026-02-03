// API 응답 타입
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// 에러 타입
export interface AppError {
  message: string;
  code?: string;
  status?: number;
}
