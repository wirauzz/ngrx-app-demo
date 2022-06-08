import { createSelector } from '@ngrx/store';
import { selectSharedUsersState } from '../state/app.state';
import * as fromUsers from '../reducers/users-page.reducer';

/**
 * User Selectors
 */

export const selectUserState = createSelector(
  selectSharedUsersState,
  (sharedUserFeature) => sharedUserFeature.users
);

export const selectAllUsers = createSelector(
  selectUserState,
  fromUsers.selectUsers
);

export const selectActiveUser = createSelector(
  selectUserState,
  fromUsers.selectUserId
);
