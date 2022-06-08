import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../models/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  originalUser: User | undefined;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  userForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

  @Input() set user(user: User | null) {
    this.userForm.reset();
    this.originalUser = undefined;

    if (user) {
      this.userForm.setValue({
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        email: user.username
      });
      this.originalUser = user;
    }
  }

  onSubmit(user: User) {
    this.save.emit({ ...this.originalUser, ...user });
  }
}
