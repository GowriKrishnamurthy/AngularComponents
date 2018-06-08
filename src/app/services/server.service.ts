import { Injectable } from '@angular/core';
import { Headers,Response, Http } from '@angular/http';
import 'rxjs/Rx'; 
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ServerService {

  constructor(private http: Http) { }
  URL = 'https://angular-http-d0174.firebaseio.com/data.json';

  storeServer(servers: any[]) {
    const dataHeaders = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post(
    //   this.URL,
    //   servers,
    //   { headers: dataHeaders });
    return this.http.put(
      this.URL,
      servers,
      { headers: dataHeaders })
  }

  getServers() {
    return this.http.get(this.URL)
    .map(
      (response:Response)=>{
        const data=response.json();
        for(const server of data){
          server.name='FETCHED_' + server.name;
        }
        return data;
      })
    .catch((error:Response) => {
        return Observable.throw('Something went wrong!');
      }
    );
  }
  getAppName(){
    return this.http.get('https://angular-http-d0174.firebaseio.com/appName.json')
      .map(
        (response:Response)=>{
          return response.json();
        }
      )
  }

}
