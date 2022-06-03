import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-app-demo';

  constructor(
    private userSerice: UserService
  ) { }
  ngOnInit() {
    this.userSerice.getUsers().subscribe((resp) =>
      console.log(resp)
    )
  }
}
