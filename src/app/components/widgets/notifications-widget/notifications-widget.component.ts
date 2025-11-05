// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-notifications-widget',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './notifications-widget.component.html',
//   styleUrls: ['./notifications-widget.component.css']
// })
// export class NotificationsWidgetComponent implements OnInit {
//   notifications: any[] = [];
//   loading = true;

//   ngOnInit(): void {
//     // Simulated API call delay
//     setTimeout(() => {
//       this.notifications = [
//         { id: 1, message: 'New user registered', time: '2 min ago' },
//         { id: 2, message: 'Server backup completed', time: '10 min ago' },
//         { id: 3, message: 'New sale recorded', time: '25 min ago' },
//         { id: 4, message: 'Password changed successfully', time: '1 hr ago' },
//       ];
//       this.loading = false;
//     }, 1200);
//   }

//   trackById(index: number, item: any) {
//     return item.id;
//   }
// }




















// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-notifications-widget',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './notifications-widget.component.html',
//   styleUrls: ['./notifications-widget.component.css']
// })
// export class NotificationsWidgetComponent implements OnInit {
//   notifications: any[] = [];
//   loading = true;

//   ngOnInit(): void {
//     // Simulated API call delay
//     setTimeout(() => {
//       this.notifications = [
//         { id: 1, message: 'New user registered', time: '2 min ago' },
//         { id: 2, message: 'Server backup completed', time: '10 min ago' },
//         { id: 3, message: 'New sale recorded', time: '25 min ago' },
//         { id: 4, message: 'Password changed successfully', time: '1 hr ago' },
//       ];
//       this.loading = false;
//     }, 1200);
//   }

//   trackById(index: number, item: any) {
//     return item.id;
//   }
// }

















// import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-notifications-widget',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './notifications-widget.component.html',
//   styleUrls: ['./notifications-widget.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush, // ✅ Performance optimization
// })
// export class NotificationsWidgetComponent implements OnInit {
//   notifications: any[] = [];
//   loading = true;

//   ngOnInit(): void {
//     // ✅ Simulate API delay
//     setTimeout(() => {
//       this.notifications = [
//         { id: 1, message: 'New user registered', time: '2 min ago' },
//         { id: 2, message: 'Server backup completed', time: '10 min ago' },
//         { id: 3, message: 'New sale recorded', time: '25 min ago' },
//         { id: 4, message: 'Password changed successfully', time: '1 hr ago' },
//       ];
//       this.loading = false;
//     }, 1000);
//   }

//   trackById(index: number, item: any): number {
//     return item.id;
//   }
// }

















// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';



// @Component({
//   selector: 'app-user-widget',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './user-widget.component.html',
//   styleUrls: ['./user-widget.component.css']
// })







// // @Component({
// //   selector: 'app-notifications-widget',
// //   templateUrl: './notifications-widget.component.html',
// // })
// export class NotificationsWidgetComponent implements OnInit {
//   notifications: any[] = [];
//   loading = true;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments?_limit=5')
//       .subscribe({
//         next: (data) => {
//           this.notifications = data;
//           this.loading = false;
//         },
//         error: (err) => {
//           console.error('Error loading notifications', err);
//           this.loading = false;
//         }
//       });
//   }

//   trackById(index: number, note: any) {
//     return note.id;
//   }
// }

















import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications-widget.component.html',
  styleUrls: ['./notifications-widget.component.css']
})
export class NotificationsWidgetComponent {
  loading = true;
  notifications: any[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.notifications = [
        { id: 1, message: 'Server restarted successfully' },
        { id: 2, message: 'New user registered' },
        { id: 3, message: 'Backup completed' }
      ];
      this.loading = false;
    }, 1000);
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
