import { Component } from '@angular/core';
import { LikeEventArgs } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tweet={
    body:`"If Pipe is pure (its output depends only on its input
      Normally pipe is transform method is only invoked when the inputs to pipestransformmethod change. If the pipe has internal state (it's result are dependent on state other than its arguments)`,
    isLiked:false,
    likesCount:0
  }
  onTweetLike(eventArgs:LikeEventArgs){
    console.log("Tweet liked"+eventArgs.isLiked+eventArgs.likesCount); 
  }
}
