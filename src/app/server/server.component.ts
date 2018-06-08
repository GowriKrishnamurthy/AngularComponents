import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  servers = [];
  constructor(private serverService: ServerService) {
  }
  ngOnInit() {
    this.serverService.getServers()
      .subscribe(
        (servers: any[]) => {
          this.servers = servers;
        },
        (error) => {
          if (error.status === 400) {
            console.log(error.json());
          }
          else {
            // alert("An unexpected error occured");
            console.log(error);
          }
        }
      );
  }


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
  onSave() {
    this.serverService.storeServer(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
