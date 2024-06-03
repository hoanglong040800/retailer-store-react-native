import { axiosClient } from 'config';

const ROUTE = '/config';

export const getGlobalConfig = () => axiosClient.get(ROUTE);
