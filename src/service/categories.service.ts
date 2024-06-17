import { axiosClient } from 'config';
import { CategoryDto } from 'types';

const ROUTE = '/categories';

export const getAllCategories = (): Promise<CategoryDto[]> => axiosClient.get(ROUTE);

export const getCategoryById = (id: string): Promise<CategoryDto> => axiosClient.get(`${ROUTE}/${id}`);
