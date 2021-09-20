import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
export class Tasks{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    ra : string;

    @Column()
    name: string;

    @Column()
    born_date: Date;

    @Column()
    adress: string;

    @Column({
        default: false
    })

    active_student: boolean;

    @CreateDateColumn()
    creat_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
    

}