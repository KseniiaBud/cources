export interface ICource {
    id: number;
    title: string;
    topRated: boolean;
    creationDate: Date;
    duration: number;
    description: string;
}

export interface ICourceResponse {
    content: ICource[];
    totalElements: number;
}
