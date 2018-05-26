import { Component } from '@angular/core';
import { LikeEventArgs } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet={
    body:'Here is the body of a tweet...',
    isLiked:false,
    likesCount:0
  }
  onTweetLike(eventArgs:LikeEventArgs){
    console.log("Tweet liked"+eventArgs.isLiked+eventArgs.likesCount); 
  }
}
