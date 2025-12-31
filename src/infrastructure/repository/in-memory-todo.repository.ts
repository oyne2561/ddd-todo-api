import { Injectable } from "@nestjs/common";
import { Todo } from "src/domain/model/todo";
import { ITodoRepository } from "src/domain/repository/todo";

@Injectable()
export class InMemoryTodoRepository implements ITodoRepository {
  // DBのテーブルを模したデータ
  private readonly todoTable = [
    { id: '1', title: 'NestJSでDDD' },
    { id: '2', title: '夕食の買い物' },
  ];

  // Tagテーブル（TodoIdでリレーションを持っている想定）
  private readonly tagTable = [
    { id: 't1', todoId: '1', label: 'Coding' },
    { id: 't2', todoId: '1', label: 'Architecture' },
    { id: 't3', todoId: '2', label: 'Life' },
  ];

  async findAll(): Promise<Todo[]> {
    return this.todoTable.map((todo) => {
      const relatedTags = this.tagTable.filter((tag) => tag.todoId === todo.id);

      return Todo.of(
        todo.id,
        todo.title,
        relatedTags.map((tag) => ({ id: tag.id, label: tag.label }))
      )
    })
  }
}