import axios from "axios";

// 创建 Axios 实例
const api = axios.create({
  baseURL: "http://localhost:5000/api", // 后端 API 地址
  timeout: 5000, // 超时时间（毫秒）
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器（在发送请求前执行）
api.interceptors.request.use(
  (config) => {
    // 读取本地存储中的 Token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 在请求头中添加 Token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器（在收到响应后执行）
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
