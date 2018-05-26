import { Component, OnInit, Input, Output, EventEmitter,} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'] 
})
export class LikeComponent  {
  
  @Input() likesCount:number;
  @Input() isLiked:boolean;
  @Output() liked= new EventEmitter();

  onClick(){
    this.likesCount+=this.likesCount?-1:1;
    this.isLiked=!this.isLiked;
  } 
}
export interface LikeEventArgs{
  likesCount:number;
  isLiked:boolean;
}