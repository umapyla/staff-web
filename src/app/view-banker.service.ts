import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class ViewBankerService {
  private url = 'https://api.myjson.com/bins/amaua';

  constructor(private http: Http) { }

  getData(): Observable<Response> {
    return this.http.get(this.url);
  }
}
