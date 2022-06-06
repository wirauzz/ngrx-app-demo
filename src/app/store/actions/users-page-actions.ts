import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/User";

export const getUsers = createAction(
    '[Users Page] Get Users',
    props<{Users: User[]}>()
)

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