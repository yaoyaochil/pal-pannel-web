

export interface GlobalResponse<T> {
    code: number;
    data: T;
    msg: string;
}