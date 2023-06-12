import { SystemCountry } from "app/systemCountry/model/systemCountry";
import { IsDefined, IsEnum } from "class-validator";
import { Status } from "common/Status/status";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SystemState {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  @Column()
  @IsDefined({ groups: ["register", "patch"] })
  name!: string;
  @Column()
  symbol?: string;
  @ManyToOne(() => SystemCountry, (systemCountry) => systemCountry.id)
  @Column()
  @IsDefined({ groups: ["register", "patch"] })
  countryId!: string;
  @Column()
  @IsEnum(Status)
  @IsDefined({ groups: ["register", "patch"] })
  statusId!: Status;
  @Column()
  @IsDefined({ groups: ["register", "patch"] })
  log!: string;
}
