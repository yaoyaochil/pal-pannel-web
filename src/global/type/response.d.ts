

export interface GlobalResponse<T> {
    code: number;
    data: T;
    msg: string;
}


export interface GlobalResponseWithDetailed<T> {
    code: number;
    data: {
        list: T[];
        total: number;
        page: number;
        pageSize: number;
    };
    msg: string;
}