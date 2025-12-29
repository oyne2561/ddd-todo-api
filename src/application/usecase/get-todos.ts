import { Todo } from "src/domain/model/todo";
import { ITodoRepository } from "../../domain/repository/todo"

export class GetTodosUseCase {
  constructor(private readonly todoRepo: ITodoRepository) {}

  async execute(): Promise<Todo[]> {
    return this.todoRepo.findAll();
  }
}