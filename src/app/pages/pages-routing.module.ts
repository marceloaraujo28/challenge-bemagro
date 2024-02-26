import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { UserRepoPageComponent } from './user-repo-page/user-repo-page.component';

const routes: Routes = [
  { path: '', component: UsersPageComponent },
  { path: 'user-detail', component: UserDetailPageComponent },
  { path: 'user-detail/:id', component: UserDetailPageComponent },
  { path: 'user-repo/:name/:id', component: UserRepoPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
