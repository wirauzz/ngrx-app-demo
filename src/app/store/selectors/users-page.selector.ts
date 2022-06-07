import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { UserState } from '../reducers/users-page.reducer';

export const selectUsers = (state: AppState) => state.users;
export const selectAllUsers = createSelector(
  selectUsers,
  (state: UserState) => state.users
);