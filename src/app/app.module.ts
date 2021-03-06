import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { CustomTitleCasePipe } from './custom-title-case.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './pipes/summary.pipe';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { ReactiveProjectFormComponent } from './reactive-project-form/reactive-project-form.component';
import { NgClassBindingComponent } from './ng-class-sample/ng-class-sample.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ServerComponent } from './server/server.component';
import { ServerService } from './services/server.service';


@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    AuthorsComponent,
    CustomTitleCasePipe,
    SummaryPipe,
    PanelComponent,
    InputFormatDirective,
    ZippyComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordFormComponent,
    PostsComponent,
    NewUserFormComponent,
    FormAssignmentComponent,
    ReactiveFormDemoComponent,
    ReactiveProjectFormComponent,
    NgClassBindingComponent,
    FilterPipe,
    ReversePipe,
    ShortenPipe,
    SortPipe,
    ServerComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [AuthorsService, PostService,ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
