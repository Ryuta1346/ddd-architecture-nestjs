export class UserName {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  get(): string {
    return this.value;
  }
}
