import { ApiProperty } from '@nestjs/swagger';

export class GetTodosResponse {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly tags: string[];

  constructor(partial: Partial<GetTodosResponse>) {
    Object.assign(this, partial);
  }
}