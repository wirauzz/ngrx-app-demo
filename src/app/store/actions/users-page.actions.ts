import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/User";

export const loadUsers = createAction(
  '[Users Action] Load Users'
);

export const loadUsersSuccess = createAction(
  '[Users Action] Users Load Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Users Action] Users Load Failure',
  props<{ error: string }>()
);

export const selectUser = createAction(
  '[Users Action] Select User',
  props<{userId: number}>()
);

export const clearSelectedUser = createAction(
  '[Users Action] Clear Selected User'
);

export const createUser = createAction(
  '[Users Page] Create Users',
  props<{newUser: User}>()
)

export const removeUser = createAction(
  '[Users Page] Remove Users',
  props<{idUser: number}>()
)

export const editUser = createAction(
  '[Users Page] Edit Users',
  props<{idUser: number, newUser: User}>()
)