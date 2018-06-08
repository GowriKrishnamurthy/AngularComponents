import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private http:Http) { }
  storeServer(servers:any[])
  {
    const dataHeaders=new Headers({'Content-Type':'application/json'});
    return this.http.post(
      'https://angular-http-d0174.firebaseio.com/data.json',
        servers,
        {headers:dataHeaders});
  }
}
