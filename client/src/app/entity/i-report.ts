export interface IReport {
    id ?         : number;
    uId          : string;
    usedCharId   : string;
    compCharId   : string;
    stageId      : string;
    result       : string;
    env          : string;
    created_at ? : Date;
    updated_at ? : Date;
}

export interface IReportFindAllOption {
    uId          : string;
    usedCharId ? : string;
    compCharId ? : string;
    offset       : number;
    limit        : number;
}


export interface IReportAnalys {
    uId        : string;
    usedCharId : string;
    compCharId : string;
    total      : number;
    win        : number;
    lose       : number;
    rate       : number;
}

export interface IReportDetail {
    uId        : string;
    usedCharId : string;
    compCharId : string;
    stageId    : string;
    win        : number;
    lose       : number;
    rate       : number;
}

export interface IReportAnarysOption {
    uId        : string;
    usedCharId : string;
}

export interface IReportDetailOption {
    uId        : string;
    usedCharId : string;
    compCharId : string;
}