// import { createAction, props } from '@ngrx/store';

// export const addWidget = createAction(
//   '[Dashboard] Add Widget',
//   props<{ widgetType: string }>()
// );

// export const removeWidget = createAction(
//   '[Dashboard] Remove Widget',
//   props<{ widgetType: string }>()
// );


















// import { createAction, props } from '@ngrx/store';

// export const addWidget = createAction(
//   '[Dashboard] Add Widget',
//   props<{ widgetType: string }>()
// );

// export const removeWidget = createAction(
//   '[Dashboard] Remove Widget',
//   props<{ widgetType: string }>()
// );











// import { createAction, props } from '@ngrx/store';

// export const setWidgets = createAction(
//   '[Dashboard] Set Widgets',
//   props<{ widgets: string[] }>()
// );

// export const setUserSession = createAction(
//   '[Dashboard] Set User Session',
//   props<{ session: any }>()
// );

// export const loadNotifications = createAction('[Dashboard] Load Notifications');

// export const loadNotificationsSuccess = createAction(
//   '[Dashboard] Load Notifications Success',
//   props<{ notifications: any[] }>()
// );















// import { createAction, props } from '@ngrx/store';

// export const addWidget = createAction(
//   '[Dashboard] Add Widget',
//   props<{ widgetType: string }>()
// );

// export const removeWidget = createAction(
//   '[Dashboard] Remove Widget',
//   props<{ widgetType: string }>()
// );

















import { createAction, props } from '@ngrx/store';

// 🧩 Widget Actions
export const addWidget = createAction(
  '[Dashboard] Add Widget',
  props<{ widgetType: string }>()
);

export const removeWidget = createAction(
  '[Dashboard] Remove Widget',
  props<{ widgetType: string }>()
);

export const setWidgets = createAction(
  '[Dashboard] Set Widgets',
  props<{ widgets: string[] }>()
);

// 🧩 Session Actions
export const setUserSession = createAction(
  '[Dashboard] Set User Session',
  props<{ session: any }>()
);

// 🧩 Notifications Actions
export const loadNotificationsSuccess = createAction(
  '[Dashboard] Load Notifications Success',
  props<{ notifications: any[] }>()
);

