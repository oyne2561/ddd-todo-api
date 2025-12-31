export class Tag {
  constructor(
    private readonly id: string,
    private readonly label: string
  ) {}

  getLabel(): string {
    return this.label;
  }
}