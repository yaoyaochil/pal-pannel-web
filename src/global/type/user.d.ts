

export type userInfoType = {
    id: number,
    username: string,
    headerImg: string,
    nickName: string,
    uuid: string
}

export interface loginResponse {
    user: userInfoType,
    token: string,
    expiresAt: number
}