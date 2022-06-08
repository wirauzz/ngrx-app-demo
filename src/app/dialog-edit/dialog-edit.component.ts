import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent implements OnInit {
  formUser: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createUserForm();
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
    const editedUser = new User();
    editedUser.first_name = formAsset.firstName.trim();
    editedUser.last_name = formAsset.lastName.trim();
    editedUser.username = formAsset.userName.trim();
    editedUser.email = formAsset.email.trim();
    editedUser.id = this.data.user.id;
    this.dialogRef.close({ data: editedUser });
  }
  
}
