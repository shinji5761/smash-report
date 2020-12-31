import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Counterplan {
    @PrimaryColumn({ 'length' : 255, 'name' : 'u_id' })
    uId    : string;

    @PrimaryColumn({ 'length' : 255, 'name' : 'char_id' })
    charId : string;

    @Column({ 'name' : 'text' })
    text   : string;
}

export interface ICounterplanDto {
    uId    : string;
    charId : string;
}