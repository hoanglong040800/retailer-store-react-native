import * as yup from 'yup';

export const createTodoSchema = {
  title: yup.string().required().max(50),
  description: yup.string().max(200),
};

export const editTodoSchema = {
  ...createTodoSchema,
};
