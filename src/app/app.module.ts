import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatTableModule } from '@angular/material';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { DialogRemoveComponent } from './dialog-remove/dialog-remove.component';
import { DialogAddComponent } from './dialog-add/dialog-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './store/reducers/users-page.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UsersPageComponent } from './users-page/users-page.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogEditComponent,
    DialogRemoveComponent,
    DialogAddComponent,
    UsersPageComponent,
    UsersListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    StoreModule.forRoot({ user: usersReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogEditComponent,
    DialogRemoveComponent,
    DialogAddComponent
  ]
})
export class AppModule { }
