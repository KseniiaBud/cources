import { Injectable } from '@angular/core';
import { ICource, ICourceResponse } from '../models/cources';
import { HttpClient } from '@angular/common/http';
import { map, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourcesService {
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getCources(params: { _page: number; _per_page: number; _sort: string; title?: string;}): Observable<ICourceResponse> {
    return this.httpClient.get<ICourceResponse>(`/videocourses`, { params }).pipe(map((data: ICourceResponse) => data));
  }

  public getCourcesByTitle(str:string): Observable<ICourceResponse> {
    const params = {
      _page: 1,
      _per_page: 10,
      _sort: 'creationDate',
      // поиск по полному совпадению(зависит так же от регистра в базе), не работает по `ci(contains(${this.search}))`
      // title: `ci(contains(${this.search}))`
      title: str
    }
    return this.httpClient.get<ICourceResponse>(`/videocourses`, { params });
  }

  public getCourceById(id: string): Observable<ICource[]> {
    return this.httpClient.get<ICource[]>(`/videocourses?id=${id}`);
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
