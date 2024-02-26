import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepoPageComponent } from './user-repo-page.component';

describe('UserRepoPageComponent', () => {
  let component: UserRepoPageComponent;
  let fixture: ComponentFixture<UserRepoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRepoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRepoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
