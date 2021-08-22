import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getInfoCovid(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>('/api/Covid');
  }
}
