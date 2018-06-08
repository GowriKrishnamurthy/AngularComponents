import { Component } from '@angular/core';
import { Server } from 'tls';

@Component({
  selector: 'ng-class-binding',
  templateUrl: './ng-class-sample.component.html',
  styleUrls: ['./ng-class-sample.component.css']
})
export class NgClassBindingComponent{
  appStatus= new Promise(
    (resolve,reject)=>{
      setTimeout(() => {
        resolve('stable');
      }, 2000);
    }
  ) ;
  filteredString="";
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(9, 1, 2012)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'offline',
      started: new Date(13, 4, 2018)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 5, 2018)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'critical',
      started: new Date(7, 6, 2018)
    }
  ];
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
  onAddServers(){
    this.servers.push(
      {
        instanceType: 'medium',
        name: 'Production Server',
        status: 'offline',
        started: new Date(6, 6, 2018)
      },
      {
        instanceType: 'medium',
        name: 'Production Server',
        status: 'critical',
        started: new Date(2, 11, 2017)
      }
    );
  }
}
