import { NgModule } from '@angular/core';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import * as fromUsers from '../reducers/users-page.reducer';

export const FEATURE_KEY = 'users';

/**
 * State Shape
 **/
export interface AppState {
  users: fromUsers.UserState;
}

export const reducers: ActionReducerMap<any> = {
  users: fromUsers.usersReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];

/**
 * Module
 **/
@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})
export class UsersModule {}

/**
 * Feature Selector
 **/
export const selectSharedUsersState = createFeatureSelector<AppState>(FEATURE_KEY);

