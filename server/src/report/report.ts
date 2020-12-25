import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity( )
export class Report {
    @PrimaryGeneratedColumn( )
    readonly id : number;

    @Column({ 'length' : 255, 'name' : 'u_id' })
    uId : string;

    @Column({ 'length' : 3, 'name' : 'used_char_id' })
    usedCharId : string;

    @Column({ 'length' : 3, 'name' : 'comp_char_id' })
    compCharId : string;
    
    @Column({ 'length' : 3, 'name' : 'stage_id' })
    stageId : string;
    
    @Column({ 'length' : 4, 'name' : 'result' })
    result : string;
    
    @Column({ 'length' : 4, 'name' : 'env' })
    env : string;

    /** 新規登録日時 */
    @CreateDateColumn({ name: 'created_at', type: 'timestamp', precision: 0 })
    readonly created_at: Date;
    
    /** 最終更新日時 */
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', precision: 0 })
    readonly updated_at: Date;
}


@ViewEntity({
    'expression' : `
    SELECT
        total.u_id
        , total.used_char_id AS "used_char_id"
        , total.comp_char_id AS "comp_char_id"
        , COALESCE( total.cnt, 0) AS "total"
        , COALESCE( win.cnt, 0 )  AS "win"
        , COALESCE( lose.cnt, 0 ) AS "lose"
        , ROUND( COALESCE( win.cnt::NUMERIC / total.cnt::NUMERIC, 0), 2) AS rate
    FROM
    (
        SELECT used_char_id, comp_char_id, u_id, COUNT( * ) AS cnt FROM report
        GROUP BY used_char_id, comp_char_id, u_id
    ) total
    -- 勝数
    LEFT JOIN
    (
        SELECT used_char_id, comp_char_id, u_id, COUNT( * ) AS cnt FROM report
        WHERE result = '0' 
        GROUP BY used_char_id, comp_char_id, u_id
    ) win
    ON ( total.used_char_id = win.used_char_id AND total.comp_char_id = win.comp_char_id AND total.u_id = win.u_id )
    -- 負数
    LEFT JOIN 
    (
        SELECT used_char_id, comp_char_id, u_id, COUNT( * ) AS cnt FROM report
        WHERE result = '1' 
        GROUP BY used_char_id, comp_char_id, u_id
    ) lose
    ON ( total.used_char_id = lose.used_char_id AND total.comp_char_id = lose.comp_char_id AND total.u_id = lose.u_id )
    ORDER BY total.u_id, TO_NUMBER( total.used_char_id, '999' ), TO_NUMBER( total.comp_char_id, '999' )
    `
})
export class SummaryReport {
    @ViewColumn({ 'name' : 'u_id' })
    uId : string;

    @ViewColumn({ 'name' : 'used_char_id' })
    usedCharId : string;

    @ViewColumn({ 'name' : 'comp_char_id' })
    compCharId : string;

    @ViewColumn({ 'name' : 'total' })
    total : number;

    @ViewColumn({ 'name' : 'win' })
    win : number;

    @ViewColumn({ 'name' : 'lose' })
    lose : number;

    @ViewColumn({ 'name' : 'rate' })
    rate : number;
}