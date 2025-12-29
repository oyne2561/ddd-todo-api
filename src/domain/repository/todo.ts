import { Todo } from "../model/todo";

export abstract class ITodoRepository {
  abstract findAll(): Promise<Todo[]>;
}