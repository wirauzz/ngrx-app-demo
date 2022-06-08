import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.scss']
})
export class DialogAddComponent implements OnInit {
  formUser: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.createUserForm()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createUserForm() {
    this.formUser = this.formBuilder.group({
      firstName: [
        '',
        Validators.required,
        Validators.maxLength(20)
      ],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required]
    })
  }
  

  onSubmit(formAsset) {
    const newUser = new User();
    newUser.first_name = formAsset.firstName.trim();
    newUser.last_name = formAsset.lastName.trim();
    newUser.username = formAsset.userName.trim();
    newUser.email = formAsset.email.trim();
    newUser.id = Math.floor((Math.random() * 1000) + 1);
    this.dialogRef.close({ data: newUser });
  }
}
