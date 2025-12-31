import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GetTodosUseCase } from "src/application/usecase/get-todos";
import { Todo } from "src/domain/model/todo";
import { GetTodosResponse } from "src/infrastructure/dto/todo.dto";

@ApiTags('todos')
@Controller('todos')
export class TodoController {
  constructor(private readonly usecase: GetTodosUseCase) {}

  @Get()
  @ApiOperation({ summary: 'TODO一覧を取得' })
  @ApiResponse({ status: 200, type: [GetTodosResponse] })
  async getTodos(): Promise<GetTodosResponse[]> {
    const todos = await this.usecase.execute();
    return this.toResponse(todos);
  }

  private toResponse(todos: Todo[]): GetTodosResponse[] {
    return todos.map((todo) => new GetTodosResponse({
      id: todo.id.getValue,
      title: todo.title,
      tags: todo.tags.map((tag) => tag.getLabel())
    }));
  }
}
