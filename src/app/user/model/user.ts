import { IsDefined, IsNotEmpty, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator";
import { Entity,Column ,PrimaryGeneratedColumn} from "typeorm";
@Entity()

export class User {
  @PrimaryGeneratedColumn()
  id!: number;
  @IsString()
  @IsDefined({groups:['signUp','login']})
  @Column()
  name!: string;
  @Column()
  @IsDefined({groups:['signUp','login']})
  @IsNotEmpty({ groups: ["signUp"], message: "Password cannot be empty" })
  @IsStrongPassword({minLength:10}, { groups: ["signUp"], message: "Password is too weak" })
  @IsString()
  @MinLength(8)
  @MaxLength(20) 
  password!: string;
}
