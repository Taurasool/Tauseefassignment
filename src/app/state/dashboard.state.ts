// export interface DashboardState {
//   widgets: string[]; // e.g. ['user-widget', 'sales-widget', 'notifications-widget']
// }

// export const initialState: DashboardState = {
//   widgets: ['user-widget', 'sales-widget', 'notifications-widget']
// };










// export interface DashboardState {
//   selectedWidgets: string[];
//   userSession: any;
//   notifications: any[];
// }

// export const initialDashboardState: DashboardState = {
//   selectedWidgets: ['users', 'sales', 'notifications'],
//   userSession: null,
//   notifications: []
// };













// export interface DashboardState {
//   widgets: string[];
//   session: any;
//   notifications: any[];
// }

// export const initialState: DashboardState = {
//   widgets: ['user-widget', 'sales-widget', 'notifications-widget'],
//   session: null,
//   notifications: []
// };









export interface DashboardState {
  widgets: string[];
  session: any;
  notifications: any[];
}

export const initialState: DashboardState = {
  widgets: ['user-widget', 'sales-widget', 'notifications-widget'],
  session: null,
  notifications: []
};
