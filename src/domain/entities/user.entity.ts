import {
  IsString,
  Length,
  Max,
  MaxLength,
  Min,
  MinLength,
  validate,
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
    // this.validate(id, firstName, lastName, age);
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static async validate(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
  ) {
    validate({
      id,
      firstName,
      lastName,
      age,
    }).then((errors) => {
      // errors is an array of validation errors
      console.log('===errors!: ', { errors });
      if (errors.length > 0) {
        console.log('validation failed. errors!!!: ', errors);
        throw new Error(`${errors}`);
      } else {
        console.log('validation succeed!!!');
      }
    });
  }

  private validate(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
  ) {
    if (!firstName || !lastName || !age) {
      return;
    }
    if (age < 0 || age >= 130) {
      throw new Error('Age must be between 0 and 130');
    }

    if (firstName.length > 30) {
      throw new Error('First name must be 30 characters or less');
    }

    if (lastName.length > 30) {
      throw new Error('Last name must be 30 characters or less');
    }
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
