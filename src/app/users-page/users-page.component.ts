import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  onSelect(user: User) {
    this.selectedUser = user;
  }

  onDelete(user: User) {
    this.userService.removeUser(user.id).subscribe(() => {
      this.getUsers();
      this.removeSelectedUser();
    })
  }

  removeSelectedUser() {
    this.selectedUser = null;
  }

  onCancel() {
    this.removeSelectedUser();
  }

  onSave(user: User) {
    if('id' in user) {
      this.updateUser(user);
    } else {
      this.saveUser(user);
    }
  }

  saveUser(user: User) {
    this.userService.postUser(user).subscribe(() => {
      this.removeSelectedUser();
    })
  }

  updateUser(user: User) {
    this.userService.putUser(user, user.id).subscribe(() => {
      this.removeSelectedUser();
    })
  }

}
