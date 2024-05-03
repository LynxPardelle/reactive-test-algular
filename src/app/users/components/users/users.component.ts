import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
/* Services */
import { UserService } from '../../user.service';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  providers: [UserService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit, AfterViewInit {
  public users$ = this.userService.getUsersSubject();
  public userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });
  constructor(public userService: UserService) {
    /* this.users$.subscribe((users) => {
      console.log('UsersComponent -> constructor -> users', users);
    }); */
  }

  ngOnInit(): void {
    this.dispatchUsers();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.dispatchUsers();
  }

  public addUser(): void {
    this.userService.addUser(this.userForm.value);
    this.userForm.reset();
  }

  dispatchUsers(): void {
    this.userService.dispatchUsers();
  }
}
