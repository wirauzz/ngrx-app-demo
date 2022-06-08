import { createReducer, createSelector, on } from '@ngrx/store';
import { User } from 'src/app/models/User';
import * as UserActions from '../actions/users-page.actions';

export interface UserState {
    users: User[];
    activeUserId: number | null;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const initialState: UserState = {
    users: [],
    activeUserId: null,
    error: null,
    status: 'pending'
}


export const usersReducer = createReducer(
    initialState,
    on(UserActions.loadUsers, (state) => ({ ...state, status: 'loading'})
    ),
    on(UserActions.removeUser, (state, { idUser }) => ({ 
        ...state,
        users: state.users.filter((user) => user.id !== idUser),
    })),
    on(UserActions.createUser, (state, { newUser }) => ({
        ...state,
        users: [...state.users, { id: newUser.id,
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            username: newUser.username,
            email: newUser.email }],
    })),
    on(UserActions.selectUser, (state, {userId}) => ({
        ...state,
        activeUserId: userId
    })),
    on(UserActions.clearSelectedUser, (state) => ({
        ...state,
        activeUserId: null
    })),
    on(UserActions.loadUsers, (state) => ({ ...state, status: 'loading' })),
    on(UserActions.loadUsersSuccess, (state, { users }) => ({
        ...state,
        users: users,
        error: null,
        status: 'success',
    })),
    on(UserActions.loadUsersFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
  }))
)


export const selectUsers = (state: UserState) => state.users;
export const selectActiveUserId = (state: UserState) => state.activeUserId;
export const selectUserId = createSelector(
  selectUsers,
  selectActiveUserId,
  (users, activeUserId) => {
      return users.find((user) => user.id === activeUserId) || null;
  }
);
