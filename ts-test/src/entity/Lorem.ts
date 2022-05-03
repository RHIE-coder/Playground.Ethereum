import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("lorem")
export class Lorem {
  @PrimaryGeneratedColumn()
  id!: number; //확정적 할당 선언

  @Column("text")
  info!: string;
}
