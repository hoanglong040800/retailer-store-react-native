/* eslint-disable @typescript-eslint/no-explicit-any */

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ENV } from 'const';

const axiosClient = axios.create({
  baseURL: ENV.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const insertAuthToken = async (config: InternalAxiosRequestConfig) => {
  const token = await AsyncStorage.getItem('auth_token');
  const newConfig = config;

  if (token) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }

  return newConfig;
};

const parseResponse = (response: AxiosResponse<any, any>) => response.data;

const handleResponseError = (err: any) => {
  if (err.response) return err.response.data;

  return {
    status: 503,
    message: 'Server Down',
  };
};

axiosClient.interceptors.request.use(insertAuthToken);
axiosClient.interceptors.response.use(parseResponse, handleResponseError);

export default axiosClient;
