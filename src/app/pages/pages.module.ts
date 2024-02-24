import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StorageService } from './../shared/services/storage.service';
import { UserService } from './../shared/services/user.service';

import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from '../shared/components/user-list/user-list.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

@NgModule({
  declarations: [
    UsersPageComponent,
    UserListComponent,
    UserDetailPageComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService, StorageService],
})
export class PagesModule {}
