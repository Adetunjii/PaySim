import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    dateCreated: Date;

    @UpdateDateColumn()
    dateModified: Date;
}