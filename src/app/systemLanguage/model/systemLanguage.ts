import { IsDefined, IsNotEmpty } from "class-validator";
import { LOG_CANNOT_NULL, NAME_CANNOT_NULL } from "resources/app/systemLanguage";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class SystemLanguage {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  @IsDefined({ groups: ["register", "patch"], message: NAME_CANNOT_NULL })
  @IsNotEmpty({ groups: ["register", "patch"], message: NAME_CANNOT_NULL })
  @Column({ type: "varchar", nullable: true })
  name!: string;
  @IsDefined({ groups: ["register", "patch"], message: LOG_CANNOT_NULL })
  @IsNotEmpty({ groups: ["register", "patch"], message: LOG_CANNOT_NULL })
  @Column({ type: "nvarchar", nullable: false })
  log!: string[];
}
