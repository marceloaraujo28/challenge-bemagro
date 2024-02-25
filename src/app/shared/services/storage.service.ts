import { Injectable } from '@angular/core';
import { UserResponse } from '../interfaces/user-response.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public getList(): UserResponse[] {
    const list = localStorage.getItem('user-list');

    return list ? JSON.parse(list) : [];
  }

  public getUserById(id: number): null | UserResponse {
    const list = this.getList();
    const find = list.find((result: any) => result.id === id);

    if (list.length && find) {
      return find;
    }
    return null;
  }

  public add(user: UserResponse): boolean {
    let newList = [];
    const list = localStorage.getItem('user-list');

    if (list) {
      const jsonable = JSON.parse(list);

      if (jsonable.find((result: any) => result.login === user.login)) {
        return false;
      }

      newList = [...jsonable, user];
    } else {
      newList.push(user);
    }

    localStorage.setItem('user-list', JSON.stringify(newList));

    return true;
  }

  public removeItem(id: number) {
    const list = this.getList();
    const remove = list ? list.filter((item) => item.id != id) : [];

    localStorage.setItem('user-list', JSON.stringify(remove));

    return remove;
  }
}
