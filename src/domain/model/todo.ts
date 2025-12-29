import { TodoId } from "./todo-id";
import { Tag } from "./tag";

export class Todo {
  constructor(
    public readonly id: TodoId,
    public readonly title: string,
    private _tags: Tag[]
  ) {}

  static of(id: string, title: string, tags: { id: string, label: string }[]): Todo {
    return new Todo(
      new TodoId(id),
      title,
      tags.map((tag) => new Tag(tag.id, tag.label))
    );
  }

  get tags(): Tag[] {
    return [...this._tags];
  }
}
