import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { AuthorsComponent } from './authors/authors.component'; 
import { AuthorsService } from './authors.service';
import { CustomTitleCasePipe } from './custom-title-case.pipe';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    AuthorsComponent,
    CustomTitleCasePipe,
    SummaryPipe,
    PanelComponent,
    InputFormatDirective,
    ZippyComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [AuthorsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
