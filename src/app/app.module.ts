import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './posts/form-component/form';
import { PostItemComponent } from './posts/item-component/item';
import { PostsListComponent } from './posts/list-component/list';
import { PostsComponent } from './posts/posts.components';
import { PostService } from './shared/post.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PostItemComponent,
    PostsListComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
