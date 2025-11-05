// import { createReducer, on } from '@ngrx/store';
// import { addWidget, removeWidget } from './dashboard.actions';
// import { DashboardState, initialState } from './dashboard.state';

// export const dashboardReducer = createReducer(
//   initialState,
//   on(addWidget, (state, { widgetType }) => ({
//     ...state,
//     widgets: [...state.widgets, widgetType]
//   })),
//   on(removeWidget, (state, { widgetType }) => ({
//     ...state,
//     widgets: state.widgets.filter(w => w !== widgetType)
//   }))
// );
















// import { createReducer, on } from '@ngrx/store';
// import { addWidget, removeWidget } from './dashboard.actions';
// import { DashboardState, initialState } from './dashboard.state';

// export const dashboardReducer = createReducer(
//   initialState,
//   on(addWidget, (state, { widgetType }) => ({
//     ...state,
//     widgets: [...state.widgets, widgetType]
//   })),
//   on(removeWidget, (state, { widgetType }) => ({
//     ...state,
//     widgets: state.widgets.filter(w => w !== widgetType)
//   }))
// );










// import { createReducer, on } from '@ngrx/store';
// import { initialDashboardState } from './dashboard.state';
// import * as DashboardActions from './dashboard.actions';

// export const dashboardReducer = createReducer(
//   initialDashboardState,

//   on(DashboardActions.setWidgets, (state, { widgets }) => ({
//     ...state,
//     selectedWidgets: widgets
//   })),

//   on(DashboardActions.setUserSession, (state, { session }) => ({
//     ...state,
//     userSession: session
//   })),

//   on(DashboardActions.loadNotificationsSuccess, (state, { notifications }) => ({
//     ...state,
//     notifications
//   }))
// );












import { createReducer, on } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';
import { DashboardState, initialState } from './dashboard.state';

export const dashboardReducer = createReducer(
  initialState,

  on(DashboardActions.addWidget, (state, { widgetType }) => ({
    ...state,
    widgets: [...state.widgets, widgetType]
  })),

  on(DashboardActions.removeWidget, (state, { widgetType }) => ({
    ...state,
    widgets: state.widgets.filter(w => w !== widgetType)
  })),

  on(DashboardActions.setWidgets, (state, { widgets }) => ({
    ...state,
    widgets
  })),

  on(DashboardActions.setUserSession, (state, { session }) => ({
    ...state,
    session
  })),

  on(DashboardActions.loadNotificationsSuccess, (state, { notifications }) => ({
    ...state,
    notifications
  }))
);
