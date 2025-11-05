// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { DashboardState } from './dashboard.state';

// export const selectDashboardState =
//   createFeatureSelector<DashboardState>('dashboard');

// export const selectWidgets = createSelector(
//   selectDashboardState,
//   (state: DashboardState) => state.widgets
// );













// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { DashboardState } from './dashboard.state';

// export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

// export const selectWidgets = createSelector(
//   selectDashboardState,
//   (state) => state.selectedWidgets
// );

// export const selectUserSession = createSelector(
//   selectDashboardState,
//   (state) => state.userSession
// );

// export const selectNotifications = createSelector(
//   selectDashboardState,
//   (state) => state.notifications
// );


















import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from './dashboard.state';

export const selectDashboardState =
  createFeatureSelector<DashboardState>('dashboard');

// 🧩 Widgets Selector
export const selectWidgets = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.widgets
);

// 🧩 Notifications Selector
export const selectNotifications = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.notifications
);

// 🧩 Session Selector
export const selectSession = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.session
);
