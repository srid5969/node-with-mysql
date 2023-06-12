import { IsDefined } from "class-validator";
import { Status } from "common/Status/status";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SystemCountry {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  @Column()
  @IsDefined({ groups: ["register"] })
  name!: string;
  @Column({ unique: true })
  @IsDefined({ groups: ["register"] })
  currency_prefix!: string;
  @Column()
  flag_ico!: string;
  @Column({ enum: Status })
  @IsDefined({ groups: ["register", "patch"] })
  status_id!: Status;
  @Column()
  @IsDefined({ groups: ["register", "patch"] })
  log!: string;
}
