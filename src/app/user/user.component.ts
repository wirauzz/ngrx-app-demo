import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogAddComponent } from '../dialog-add/dialog-add.component';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';
import { DialogRemoveComponent } from '../dialog-remove/dialog-remove.component';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'user_name', 'email', 'actions'];
  userList: User[];
  editedUser: User;
  newUser: User;
  
  constructor(private userService: UserService, public dialog:MatDialog) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) =>
      this.userList = users
    )
  }

  onDeleteUser(user: User) {
    const dialogRef = this.dialog.open(DialogRemoveComponent, {
      width: '400px',
      data: {user: user}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.userService.removeUser(user.id)
      }
    })
  }

  onAddUser() {
    const dialogRef = this.dialog.open(DialogAddComponent, {
      width: '400px',
    });
  }

  onEditUser(user: User) {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      width: '400px',
      data: {user: user}
    });
  }
}
