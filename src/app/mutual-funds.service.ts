import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { MutualFund } from './products/mutual-fund.model';

const URL = "https://falcon-mutual-funds-service.herokuapp.com/mutual-funds";

@Injectable({
  providedIn: 'root'
})
export class MutualFundsService {

  constructor(private http: HttpClient) { }

  getMutualFunds(): Observable<any> {
    return this.http.get(`${URL}`);
  }

  getMutualFund(mf_id: number): Observable<any> {
    return this.http.get(`${URL}/${mf_id}`);
  }
}
