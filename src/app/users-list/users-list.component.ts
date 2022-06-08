import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() users: User[] | null = [];
  @Input() readonly: boolean | null = false;
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}
