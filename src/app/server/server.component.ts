import { Component } from '@angular/core';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  constructor(private serverService:ServerService){
  }
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
  onSave(){
    this.serverService.storeServer(this.servers)
    .subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error)
    );
  }
}
