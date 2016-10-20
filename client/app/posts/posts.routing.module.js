import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { PostListComponent } from './components/post-list/post-list.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { LoggedInGuard } from '../core/guards/logged-in.guard';
import { LoggedOutGuard } from '../core/guards/logged-out.guard';

const routes: Routes = [
  { path: '', component: PostListComponent, pathMatch: 'full' },
  { path: 'new', component: PostNewComponent, canActivate: [LoggedInGuard] },
  { path: 'edit/:id', component: PostEditComponent, canActivate: [LoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostsRoutingModule {}

