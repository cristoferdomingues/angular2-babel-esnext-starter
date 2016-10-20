import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


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

/*const routes = [
  { path: '', component: PostListComponent, pathMatch: 'full' },
  { path: 'new', component: PostNewComponent, canActivate: [LoggedInGuard] },
  { path: 'edit/:id', component: PostEditComponent, canActivate: [LoggedInGuard] },
];*/

@NgModule({
  declarations: [POSTS_DECLARATIONS],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  exports:[POSTS_DECLARATIONS],
  providers: [POSTS_PROVIDERS]
})

export class PostsModule{}
