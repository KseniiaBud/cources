import { Injectable } from '@angular/core';
import { ICource, ICourceResponse } from '../models/cources';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourcesService {
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getCources(params: { _page: number; _per_page: number; _sort: string; }): Observable<ICourceResponse> {
    return this.httpClient.get<ICourceResponse>(`/videocourses`, { params }).pipe(map((data: ICourceResponse) => data));
  }

  public getCourceById(id: number): Observable<ICource[]> {
    return this.httpClient.get<ICource[]>(`/videocourses?${id}`);
  }

  public createCource(courceItem: ICource): Observable<ICource> {
    courceItem.id = Math.random();
    return this.httpClient.post<ICource>(`/videocourses/`, courceItem);
  }
  public updateCource(courceItem: ICource): Observable<ICource> {
     return this.httpClient.put<ICource>(`/videocourses/${courceItem.id}`, courceItem);
  }
  public deleteCource(id: number) {
    return this.httpClient.delete(`/videocourses/${id}`);
   }

}
