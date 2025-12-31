export class TodoId {
  constructor(private readonly value: string) {}

  get getValue(): string {
    return this.value;
  }
}