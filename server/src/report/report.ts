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

@ViewEntity({
    'expression' : `
    SELECT *, round(v.win::numeric / ( v.win::numeric + v.lose::numeric), 2 ) * 100 AS rate FROM
    (
        SELECT
            u_id
            , used_char_id
            , comp_char_id
            , stage_id
            , COUNT( CASE WHEN result = '0' THEN TRUE ELSE NULL END ) AS "win"
            , COUNT( CASE WHEN result = '1' THEN TRUE ELSE NULL END ) AS "lose"
        FROM report
        GROUP BY u_id, used_char_id, comp_char_id, stage_id
        ORDER BY u_id, used_char_id, comp_char_id, stage_id
    ) v
    `
})
export class DetailReport {
    @ViewColumn({ 'name' : 'u_id' })
    uId : string;

    @ViewColumn({ 'name' : 'used_char_id' })
    usedCharId : string;

    @ViewColumn({ 'name' : 'comp_char_id' })
    compCharId : string;

    @ViewColumn({ 'name' : 'stage_id' })
    stageId : string;

    @ViewColumn({ 'name' : 'win' })
    win : number;

    @ViewColumn({ 'name' : 'lose' })
    lose : number;

    @ViewColumn({ 'name' : 'rate' })
    rate : number;
}


@ViewEntity({
    'expression' : `
    SELECT 
	  a.u_id AS u_id
    , a.date AS date
    , a.win AS win
    , a.lose AS lose
    , round( (a.win::NUMERIC / ( a.win::NUMERIC + a.lose::NUMERIC )  * 100.0)::NUMERIC, 2) AS rate
    FROM 
    (
        SELECT
        r.u_id
        , w.date
        , CASE WHEN w.win IS NOT NULL then w.win ELSE 0 END AS win
        , CASE WHEN l.lose IS NOT NULL then l.lose ELSE 0 END AS lose
        FROM 
        (
            SELECT DISTINCT u_id FROM report
        )r
        LEFT JOIN
        (
            -- 勝
            SELECT
            u_id
            , TO_CHAR( created_at, 'YYYY/MM/DD') AS date
            , COUNT( result ) AS win
            FROM report
            WHERE result = '0'
            GROUP BY u_id, date
        ) w
        ON ( r.u_id = w.u_id )
        LEFT JOIN
        (
            -- 負
            SELECT
            u_id
            , TO_CHAR( created_at, 'YYYY/MM/DD') AS date
            , COUNT( result ) AS lose
            FROM report
            WHERE result = '1'
            GROUP BY u_id, date
        ) l
        ON ( r.u_id = l.u_id AND w.date = l.date )
    ) a`
})
export class ResultToDates {
    @ViewColumn({ 'name' : 'u_id' })
    uId : string;

    @ViewColumn({ 'name' : 'date' })
    date : string;

    @ViewColumn({'name' : 'win' })
    win : number;
    
    @ViewColumn({'name' : 'lose' })
    lose : number;
    
    @ViewColumn({'name' : 'rate' })
    rate : number;
    
}