import { axiosClient } from 'config';
import { GetGlobalConfigDto } from 'types';

const ROUTE = '/config';

export const getGlobalConfig = (): Promise<GetGlobalConfigDto> => axiosClient.get(ROUTE);
