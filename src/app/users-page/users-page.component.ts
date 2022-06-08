import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import * as UserActions from '../store/actions/users-page.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectActiveUser, selectAllUsers } from '../store/selectors/users-page.selector';
@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUser$: Observable<User>;

  constructor(private userService: UserService, private store: Store<any>) {
    this.users$ = store.select(selectAllUsers);
    this.selectedUser$ = store.select(selectActiveUser);
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.store.dispatch(UserActions.loadUsersSuccess({users}));
    })
  }

  onSelect(user: User) {
    this.store.dispatch(UserActions.selectUser({userId: user.id}));

  }

  onDelete(user: User) {
    this.store.dispatch(UserActions.removeUser({idUser: user.id}));
  }

  removeSelectedUser() {
    this.store.dispatch(UserActions.clearSelectedUser())
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
    this.store.dispatch(UserActions.createUser({newUser: user}))
  }

  updateUser(user: User) {
    this.store.dispatch(UserActions.editUser({idUser: user.id, newUser: user}))
  }

}
