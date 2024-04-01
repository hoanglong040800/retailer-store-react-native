import { renderHook } from '@testing-library/react';
import { useCreateTodo } from './useCreateTodo';

const mockValueUseForm = {
  control: 'control',
  formState: {
    errors: 'errors',
  },
  handleSubmit: jest.fn(),
};

// UT: mock react-hook-form
jest.mock('react-hook-form', () => ({
  useForm: () => mockValueUseForm,
}));

const defaultProps = {
  onCreateTodo: jest.fn(),
};

const renderCustomHook = () => {
  const { result } = renderHook(() => useCreateTodo(defaultProps));
  return result.current;
};

// UT: test hook
describe('useCreateTodo', () => {
  it('should return correct value', () => {
    const { control, errors } = renderCustomHook();

    expect(control).toBe(mockValueUseForm.control);
    expect(errors).toBe(mockValueUseForm.formState.errors);
  });
});
