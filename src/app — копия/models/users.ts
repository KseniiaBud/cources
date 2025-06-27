export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
}

export interface IUserResponse {
    content: IUser[];
    totalElements: number;
}
