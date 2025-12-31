import { ITodoRepository } from "src/domain/repository/todo";
import { GetTodosUseCase } from "./get-todos";
import { Todo } from "src/domain/model/todo";

describe('GetTodosUseCase', () => {
  let useCase: GetTodosUseCase;
  let repository: ITodoRepository;

  beforeEach(() => {
    repository = {
      findAll: jest.fn(),
    } as any;

    useCase = new GetTodosUseCase(repository);
  });

  it('TodoとそのTag一覧を取得できること', async () => {
    const mockTodos = [
      Todo.of('1', 'DDD学習', [{ id: '1', label: 'Backend '}]),
    ];
    (repository.findAll as jest.Mock).mockResolvedValue(mockTodos);

    const expected = [Todo.of('1', 'DDD学習', [{ id: '1', label: 'Backend '}])];

    const result = await useCase.execute();
    expect(result).toEqual(expected);
    expect(repository.findAll).toHaveBeenCalled();
  })
})