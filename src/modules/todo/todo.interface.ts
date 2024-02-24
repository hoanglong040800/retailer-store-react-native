export interface ITodo {
  id: number;
  title: string;
  description: string;
}

export interface CreateTodoForm {
  title?: string;
  description?: string;
}
