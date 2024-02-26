import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserResponseRepo } from '../../shared/interfaces/user-response.interface';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-repo-page',
  templateUrl: './user-repo-page.component.html',
  styleUrl: './user-repo-page.component.scss',
})
export class UserRepoPageComponent implements OnInit {
  name: string;
  id: number | null;
  repoList: UserResponseRepo[] = [];

  constructor(route: ActivatedRoute, private userService: UserService) {
    this.name = route.snapshot.paramMap.get('name') || '';
    this.id = Number(route.snapshot.paramMap.get('id')) || null;
  }

  ngOnInit(): void {
    this.userService
      .getReposByName(this.name)
      .subscribe((repos: UserResponseRepo[]) => {
        this.repoList = repos;
      });
  }
}
