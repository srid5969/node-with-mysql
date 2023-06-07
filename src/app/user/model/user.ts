import { IsDefined, IsNotEmpty, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator";

export class User {
  id: any;
  @IsString()
  @IsDefined({groups:['signUp','login']})

  name: any;
  @IsDefined({groups:['signUp','login']})
  @IsNotEmpty({ groups: ["signUp"], message: "Password cannot be empty" })
  @IsStrongPassword({minLength:10}, { groups: ["signUp"], message: "Password is too weak" })
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password!: string;
}
