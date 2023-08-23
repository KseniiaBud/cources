export interface ICource {
    id: number;
    title: string;
    creationDate: string;
    duration: number;
    description: string;
}

export interface ICourceResponse {
    content: ICource[];
    totalElements: number;
}
