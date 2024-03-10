import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Chocolate } from './components/overview-chocolate/overview-chocolate.component';

@Injectable({
  providedIn: 'root',
})
export class ChocolateDataService {
  api_url = 'assets/json/chocolate-data.json';
  constructor(private http: HttpClient) {}

  // Get All Chocolates
  getAllData(): Observable<Chocolate[]> {
    const allData: Observable<Chocolate[]> = this.http.get<Chocolate[]>(
      this.api_url
    );
    return allData;
  }

  // Get Chocolate Details By ID
  getChocolateDetailsById(id: string): Observable<any> {
    const chocolate: Observable<Chocolate[]> = this.http
      .get<Chocolate>(this.api_url)
      .pipe(map((res: any) => res.data.find((el: Chocolate) => el.id == id)));
    return chocolate;
  }

  // TO Update
  updateChocolateDetailsById(
    chocolate: Chocolate,
    id: string
  ): Observable<any> {
    return this.http.put<Chocolate>(`api_url/${id}`, chocolate);
  }
}
