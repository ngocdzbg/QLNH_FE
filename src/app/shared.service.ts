import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl = 'http://localhost:5093/api';
  readonly PhotoUrl = 'http://localhost:5093/Photos';

  constructor(private http: HttpClient) {}

  layDSThucDon(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/ThucDon');
  }

  themDSThucDon(val: any): Observable<any[]> {
    return this.http.post<any[]>(this.APIUrl + '/ThucDon', val);
  }

  suaDSThucDon(val: any): Observable<any[]> {
    return this.http.put<any[]>(this.APIUrl + '/ThucDon', val);
  }

  xoaDSThucDon(): Observable<any[]> {
    return this.http.delete<any[]>(this.APIUrl + '/ThucDon');
  }

  layDSMonAn(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/MonAn');
  }

  themDSMonAn(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/MonAn');
  }

  suaDSMonAn(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/MonAn');
  }

  xoaDSMonAn(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/MonAn');
  }

  taiAnh(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/MonAn/SaveFile');
  }

  layDSTenThucDon(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/MonAn/GetAllTenThucDon');
  }
}
