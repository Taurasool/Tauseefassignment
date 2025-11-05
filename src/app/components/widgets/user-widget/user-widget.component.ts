// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

// @Component({
//   selector: 'app-user-widget',
//   standalone: true,
//   imports: [CommonModule, HttpClientModule],
//   templateUrl: './user-widget.component.html',
//   styleUrls: ['./user-widget.component.css']
// })
// export class UserWidgetComponent implements OnInit {
//   users: any[] = [];
//   loading = true;

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.fetchUsers();
//   }

//   fetchUsers() {
//     this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: any) => {
//       this.users = data;
//       this.loading = false;
//     });
//   }

//   trackById(index: number, item: any) {
//     return item.id;
//   }
// }
















// import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

// @Component({
//   selector: 'app-user-widget',
//   standalone: true,
//   imports: [CommonModule, HttpClientModule],
//   templateUrl: './user-widget.component.html',
//   styleUrls: ['./user-widget.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush, // ✅ Performance optimization
// })
// export class UserWidgetComponent implements OnInit {
//   users: any[] = [];
//   loading = true;

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.fetchUsers();
//   }

//   fetchUsers() {
//     this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
//       next: (data: any) => {
//         this.users = data;
//         this.loading = false;
//       },
//       error: (err) => {
//         console.error('Error fetching users:', err);
//         this.loading = false;
//       },
//     });
//   }

//   // ✅ Helps Angular identify items efficiently
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
// //   selector: 'app-user-widget',
// //   templateUrl: './user-widget.component.html',
// // })
// export class UserWidgetComponent implements OnInit {
//   users: any[] = [];
//   loading = true;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
//       .subscribe({
//         next: (data) => {
//           this.users = data;
//           this.loading = false;
//         },
//         error: (err) => {
//           console.error('Error loading users', err);
//           this.loading = false;
//         }
//       });
//   }

//   trackById(index: number, user: any) {
//     return user.id;
//   }
// }




















// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-user-widget',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './user-widget.component.html',
//   styleUrls: ['./user-widget.component.css']
// })
// export class UserWidgetComponent {

 
//   loading = true;
//   users: any[] = [];

//   ngOnInit() {
//     setTimeout(() => {
//       this.users = [
//         { id: 1, name: 'Tauseef', email: 'tauseef@gmail.com',username: 'tauseef123'  },
//         { id: 2, name: 'Rashid', email: 'rashid@gmail.com',username: 'rashid07' },
//         { id: 3, name: 'Ali', email: 'ali@gmail.com', username: 'ali_khan' }
//       ];
//       this.loading = false;
//     }, 1000);
//   }

//   trackById(index: number, item: any) {
//     return item.id;
//   }
// }

















import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.css']
})
export class UserWidgetComponent implements OnInit {
  users: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // ✅ API call using HttpClient
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.users = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('API Error:', err);
          this.loading = false;
        }
      });
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
