import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity( )
export class Users {
    @PrimaryColumn( { 'length' : 255 } )
    id : string;

    @Column( { 'length' : 255 } )
    email : string;
}
