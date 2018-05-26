import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  template: `
  <h2> {{authors.length}} Authors available </h2> 
  <ul>
  <li *ngFor="let author of authors">
  {{ author }}
  </li>
  </ul>
  ` ,
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;
  constructor(authorsServiceObj:AuthorsService) { 
    this.authors=authorsServiceObj.getAuthors(); 

  }

  ngOnInit() {
  }

}
