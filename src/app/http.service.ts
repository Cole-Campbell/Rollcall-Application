import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";

import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

    getData() {
    //Maps one observable into another observable
      return this.http.get('https://k00203819-assignment1.firebaseio.com/data.json')
        .map((response: Response) => response.json())

        .do(response => console.log(response));
    }

    sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
      return this.http.post('https://k00203819-assignment1.firebaseio.com/data.json', body, {
        headers: headers
      })
        .map((data: Response) => data.json());
    }
}
