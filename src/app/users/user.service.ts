import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TUser } from './types/user.type';
import { users as usersData } from './data/user.data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: TUser[] = usersData;
  public users$: Subject<TUser[]> = new Subject<TUser[]>();
  constructor() {
    this.users$.next(this.users);
  }
  /* Create */
  public addUser(user: TUser): void {
    user.id = this.users.length + 1;
    this.users.push(user);
    this.users$.next(this.users);
  }
  /* Read */
  public getUsersSubject(): Subject<TUser[]> {
    return this.users$;
  }
  /* Update */
  public updateUser(user: TUser): void {
    const index = this.users.findIndex((u) => u.id === user.id);
    this.users[index] = user;
    this.users$.next(this.users);
  }
  /* Delete */
  public removeUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
    this.users$.next(this.users);
  }
  /* Dispatch */
  public dispatchUsers(): void {
    this.users$.next(this.users);
  }
}
