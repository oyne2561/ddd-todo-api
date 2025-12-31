import { Inject, Injectable } from "@nestjs/common";
import { Todo } from "src/domain/model/todo";
import { ITodoRepository } from "../../domain/repository/todo"

@Injectable()
export class GetTodosUseCase {
  constructor(@Inject('ITodoRepository') private readonly todoRepo: ITodoRepository) {}

  async execute(): Promise<Todo[]> {
    return this.todoRepo.findAll();
  }
}