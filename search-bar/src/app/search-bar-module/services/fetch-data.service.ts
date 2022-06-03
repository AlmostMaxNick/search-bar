import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Option } from '../Option';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  getOptions(): Observable<Option[]> {
    return this.http.get<Option[]>("./../../../assets/phrases.json");
  }
}
