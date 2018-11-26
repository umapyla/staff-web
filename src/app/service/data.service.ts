import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

private url = 'https://api.myjson.com/bins/14j0hq';

constructor(private http: HttpClient) {}
getData(): Observable<any> {
  return this.http.get<any>(this.url);
}

}
