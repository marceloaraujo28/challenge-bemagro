import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserResponse } from '../../shared/interfaces/user-response.interface';
import { UserService } from '../../shared/services/user.service';
import { StorageService } from '../../shared/services/storage.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent {
  resourceForm: FormGroup;

  notfound: boolean = false;
  notfoundMessage: string = '';
  userList: UserResponse[] = [];

  constructor(
    private _userService: UserService,
    private _storageService: StorageService,
    private _formBuilder: FormBuilder
  ) {
    this.resourceForm = this._formBuilder.group({
      search: ['', Validators.compose([Validators.required])],
    });

    this.userList = this._storageService.getList();
  }

  ngOnInit(): void {
    this.resourceForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((inputs) => {
        if (!inputs.search) {
          this.notfound = false;
          return;
        }

        this._userService.getUserByName(inputs.search).subscribe({
          next: (response) => {
            this.notfound = false;

            if (response.login) {
              if (this._storageService.add(response)) {
                this.userList.push(response);
              }
            }
          },
          error: () => {
            this.notfound = true;
            this.notfoundMessage = 'Usuário não encontrado';
          },
        });
      });
  }

  clear() {
    this.resourceForm.reset();
  }

  removeItem(id: number) {
    this.userList = this._storageService.removeItem(id);
  }
}
