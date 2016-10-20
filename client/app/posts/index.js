import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';
import { PostsRoutingModule } from './posts.routing.module';

import { PostService } from './services/post/post.service';

import { ShortDescriptionPipe } from './pipes/short-description.pipe';

import { ClickCounterDirective } from './directives/click-counter.directive';

import { PostFormComponent } from './components/post-form/post-form.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostListComponent } from './components/post-list/post-list.component';

const POSTS_PROVIDERS = [PostService];

const POSTS_DECLARATIONS = [
    ShortDescriptionPipe,
    ClickCounterDirective,
    PostFormComponent,
    PostEditComponent,
    PostNewComponent,
    PostListItemComponent,
    PostListComponent
];



@NgModule({
  declarations: [POSTS_DECLARATIONS],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,PostsRoutingModule],
  exports:[POSTS_DECLARATIONS],
  providers: [POSTS_PROVIDERS]
})

export class PostsModule{}
