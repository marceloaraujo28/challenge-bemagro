import { Component, Input } from '@angular/core';
import { UserResponse } from '../../interfaces/user-response.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.sass',
})
export class UserListComponent {
  @Input() userList: UserResponse[] = [];
}
