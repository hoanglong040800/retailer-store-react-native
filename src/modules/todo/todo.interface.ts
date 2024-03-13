export interface ITodo {
  id: number;
  title: string;
  description: string;
}

// MUST mark as optional so resolver do not encounter error
export interface CreateTodoForm {
  title?: string;
  description?: string;
}

export interface EditTodoForm extends CreateTodoForm {
  id?: number;
}
