import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response , Http} from '@angular/http';

@Injectable()
export class DataService {

private url = "https://api.myjson.com/bins/14j2qa";
constructor(private http: Http) {}
getData(): Observable<Response> {
return  this.http.get(this.url);
}

}
