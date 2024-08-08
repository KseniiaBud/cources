export interface IUser {
    fakeToken: string;
    id: number;
    email: string;
    firstName: string;
    lastName: string;
}

export interface IUserResponse {
    content: IUser[];
    totalElements: number;
}
