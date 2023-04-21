import axios from 'axios';
import type { AxiosRequestConfig } from "axios";

const axiosCommonConfig: AxiosRequestConfig = {
  baseURL: '/portal/api',
  timeout: 100000, // request timeout
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
};

/**
 * 通用请求拦截器配置
 * @param config
 */
const getCommonRequestConfig = (config: any) => {
  return config;
};

// 创建一个axios示例
const instance = axios.create({
  ...axiosCommonConfig,
});

// 通用接口请求拦截器
instance.interceptors.request.use(
  (config: any) => getCommonRequestConfig(config),
  (error: any) => {
    // Do something with request error
    console.error(error); // for debug
    Promise.reject(error).catch((reason) => {
      console.error(reason);
    });
  },
);

/**
 * 正常响应拦截器
 * @param response
 */
const commonResponseInterceptorsFulfilled = (response: any): any => {
  if (response) {
    const { data } = response;
    if (data) {
      if (Number(data.code) !== 0 && Number(data.code) !== 200) {
        // message.error(data.msg || data.message || data.ErrorString);
        return Promise.reject(data.message || data.msg);
      }
    }
  }

  return response.data.data;
};

/**
 * 处理 HTTP 请求的错误码
 * @param status http code
 */
const handleHttpErrorCode = (status: number) => {
  let errorMsg = '';
  if (status) {
    switch (status) {
      case 400:
        errorMsg = '错误的请求！';
        break;
      case 401:
        errorMsg = '认证失效，请重新登录！';
        break;
      case 403:
        errorMsg = '拒绝访问！';
        break;
      case 404:
        errorMsg = '请求错误,未找到该资源！';
        break;
      case 405:
        errorMsg = '请求方法未允许！';
        break;
      case 408:
        errorMsg = '请求超时！';
        break;
      case 500:
        errorMsg = '服务器端出错！';
        break;
      case 501:
        errorMsg = '网络未实现！';
        break;
      case 502:
        errorMsg = '网络错误！';
        break;
      case 503:
        errorMsg = '服务不可用！';
        break;
      case 504:
        errorMsg = '网络超时！';
        break;
      case 505:
        errorMsg = 'http版本不支持该请求！';
        break;
      default:
        errorMsg = `其他连接错误 --${status}！`;
    }
  } else {
    errorMsg = `无法连接到服务器！`;
  }
  console.error(errorMsg);
};

/**
 * 异常响应拦截器
 * @param error
 */
const commonResponseInterceptorsRejected = (error: any): any => {
  if (!error?.response) {
    return Promise.reject(error);
  }
  if (error.code === 'ECONNABORTED') {
    return Promise.reject(error);
  }
  const { status } = error.response;
  handleHttpErrorCode(status);
  return Promise.reject(error);
};

// 通用接口响应拦截器
instance.interceptors.response.use(
  (response: any) => commonResponseInterceptorsFulfilled(response),
  (error: any) => commonResponseInterceptorsRejected(error),
);

const request = async <T, D = any>(data: AxiosRequestConfig<D>) => {
  const response = (await instance.request(data)) as T;
  return response;
};

export default request;
