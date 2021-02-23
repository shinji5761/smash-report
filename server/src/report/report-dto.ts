import { CommonDto } from "src/common/common-dto";

export interface FindAllReportDto extends CommonDto {
    uId          : string;
    usedCharId ? : string;
    compCharId ? : string;
}


export interface FindAllReport {
    uId          : string;
    usedCharId ? : string;
    compCharId ? : string;
}

export interface FindSummaryReport {
    uId        : string;
    usedCharId : string;
}

export interface FindDetailReport {
    uId        : string;
    usedCharId : string;
    compCharId : string;
}


export interface FindResultToDates {
    uId  : string;
    from : string;
    to   : string;
}