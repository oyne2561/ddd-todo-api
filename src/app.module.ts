import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './rest/todo-controller';
import { GetTodosUseCase } from './application/usecase/get-todos';
import { InMemoryTodoRepository } from './infrastructure/repository/in-memory-todo.repository';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [
    AppService,
    GetTodosUseCase,
    {
      provide: 'ITodoRepository',
      useClass: InMemoryTodoRepository,
    },
  ],
})
export class AppModule {}
