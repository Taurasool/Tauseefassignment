// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface WidgetConfig {
//   type: string;
//   title: string;
//   apiEndpoint: string;
// }

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   widgets: WidgetConfig[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.loadWidgetConfig();
//   }

//   loadWidgetConfig() {
//     this.http.get<WidgetConfig[]>('assets/widget-config.json').subscribe({
//       next: (data) => {
//         this.widgets = data;
//       },
//       error: (err) => {
//         console.error('Error loading widget config:', err);
//       }
//     });
//   }
// }



// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { UserWidgetComponent } from '../widgets/user-widget/user-widget.component';
// import { SalesWidgetComponent } from '../widgets/sales-widget/sales-widget.component';
// import { NotificationsWidgetComponent } from '../widgets/notifications-widget/notifications-widget.component';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [CommonModule, UserWidgetComponent, SalesWidgetComponent, NotificationsWidgetComponent],
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {
//   widgets = [
//     { title: 'User Widget', type: 'user-widget' },
//     { title: 'Sales Widget', type: 'sales-widget' },
//     { title: 'Notifications Widget', type: 'notifications-widget' }
//   ];
// }






















// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { selectWidgets } from '../../state/dashboard.selectors';
// import { addWidget, removeWidget } from '../../state/dashboard.actions';
// import { UserWidgetComponent } from '../widgets/user-widget/user-widget.component';
// import { SalesWidgetComponent } from '../widgets/sales-widget/sales-widget.component';
// import { NotificationsWidgetComponent } from '../widgets/notifications-widget/notifications-widget.component';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [CommonModule, UserWidgetComponent, SalesWidgetComponent, NotificationsWidgetComponent],
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {

//   // store se widgets list aa rahi hai
//   widgets$: Observable<any[]>;

//   constructor(private store: Store) {
//     this.widgets$ = this.store.select(selectWidgets);
//   }

//   ngOnInit(): void {}

//   // naya widget add karne ke liye
//   addNewWidget() {
//     this.store.dispatch(addWidget({ widgetType: 'sales-widget' }));
//   }

//   // notification widget remove karne ke liye
//   removeNotificationWidget() {
//     this.store.dispatch(removeWidget({ widgetType: 'notifications-widget' }));
//   }
// }














// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';

// import { DashboardState } from '../../state/dashboard.state';
// import { addWidget, removeWidget } from '../../state/dashboard.actions';
// import { selectWidgets } from '../../state/dashboard.selectors';

// // ✅ Import widgets so Angular recognizes them
// import { UserWidgetComponent } from '../widgets/user-widget.component';
// import { SalesWidgetComponent } from '../widgets/sales-widget.component';
// import { NotificationsWidgetComponent } from '../widgets/notifications-widget.component';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [
//     CommonModule, // ✅ fixes *ngFor, *ngSwitchCase, *ngSwitchDefault
//     UserWidgetComponent,
//     SalesWidgetComponent,
//     NotificationsWidgetComponent
//   ],
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {
//   widgets$: Observable<string[]>;

//   constructor(private store: Store<{ dashboard: DashboardState }>) {
//     this.widgets$ = this.store.select(selectWidgets);
//   }

//   addNewWidget(widgetType: string) {
//     this.store.dispatch(addWidget({ widgetType }));
//   }

//   removeWidget(widgetType: string) {
//     this.store.dispatch(removeWidget({ widgetType }));
//   }
// }










import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DashboardState } from '../../state/dashboard.state';
import { addWidget, removeWidget } from '../../state/dashboard.actions';
import { selectWidgets } from '../../state/dashboard.selectors';

// ✅ Correct imports (based on folder structure)
import { UserWidgetComponent } from '../widgets/user-widget/user-widget.component';
import { SalesWidgetComponent } from '../widgets/sales-widget/sales-widget.component';
import { NotificationsWidgetComponent } from '../widgets/notifications-widget/notifications-widget.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    UserWidgetComponent,
    SalesWidgetComponent,
    NotificationsWidgetComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  widgets$: Observable<string[]>;

  constructor(private store: Store<{ dashboard: DashboardState }>) {
    this.widgets$ = this.store.select(selectWidgets);
  }

  addNewWidget(widgetType: string) {
    this.store.dispatch(addWidget({ widgetType }));
  }

  removeWidget(widgetType: string) {
    this.store.dispatch(removeWidget({ widgetType }));
  }
}














// import { Component } from '@angular/core';
// import { UserWidgetComponent } from '../widgets/user-widget/user-widget.component';
// import { SalesWidgetComponent } from '../widgets/sales-widget/sales-widget.component';
// import { NotificationsWidgetComponent } from '../widgets/notifications-widget/notifications-widget.component';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [
//     UserWidgetComponent,
//     SalesWidgetComponent,
//     NotificationsWidgetComponent
//   ],
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {}
