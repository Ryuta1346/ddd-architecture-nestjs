import {
  IsString,
  Length,
  Max,
  MaxLength,
  Min,
  MinLength,
  validateSync,
} from 'class-validator';

export class Users {
  id: number;
  @IsString()
  @Length(1, 10, { message: '10文字以下で入力してください!' })
  firstName: string;
  @IsString()
  @MinLength(1, {
    message: 'lastName is too short',
  })
  @MaxLength(10, {
    message: 'lastName is too long',
  })
  lastName: string;
  @Max(120)
  @Min(0)
  age: number;

  constructor(id: number, firstName: string, lastName: string, age: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    const errors = validateSync(this);
    if (errors.length > 0) {
      throw new Error(`Validation failed! ${JSON.stringify(errors)}`);
    }
  }
}
