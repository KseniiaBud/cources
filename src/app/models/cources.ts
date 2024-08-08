export interface ICource {
    id: number;
    title: string;
    topRated: boolean;
    creationDate: Date;
    duration: number;
    description: string;
    autors?: string
}

export interface ICourceResponse {
    data: ICource[];
    content: ICource[];
    pages: number;
    next: number;
}

