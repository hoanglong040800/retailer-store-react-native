import { axiosClient } from 'config';
import { ProductDto } from 'types';

const ROUTE = '/products';

export const getProductById = (id: string): Promise<ProductDto> => axiosClient.get(`${ROUTE}/${id}`);
