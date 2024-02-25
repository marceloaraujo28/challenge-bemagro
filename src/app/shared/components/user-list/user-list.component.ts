import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserResponse } from '../../interfaces/user-response.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  @Input() userList: UserResponse[] = [];
  @Output() removeItem = new EventEmitter<number>();

  removeElement(id: number) {
    this.removeItem.emit(id);
  }
}
