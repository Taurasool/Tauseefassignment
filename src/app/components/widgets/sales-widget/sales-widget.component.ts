// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms'; // 👈 ADD THIS LINE

// @Component({
//   selector: 'app-sales-widget',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './sales-widget.component.html',
//   styleUrls: ['./sales-widget.component.css']
// })
// export class SalesWidgetComponent implements OnInit {
//   loading = true;
//   sales: any[] = [];

//   ngOnInit() {
//     // Simulate API call (you can replace with real API)
//     setTimeout(() => {
//       this.sales = [
//         { id: 1, product: 'Laptop', amount: 55000 },
//         { id: 2, product: 'Mobile', amount: 20000 },
//         { id: 3, product: 'Headphones', amount: 2500 },
//       ];
//       this.loading = false;
//     }, 1500);
//   }

//   trackById(index: number, item: any) {
//     return item.id;
//   }
// }
















// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-sales-widget',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './sales-widget.component.html',
//   styleUrls: ['./sales-widget.component.css']
// })
// export class SalesWidgetComponent implements OnInit {
//   sales: any[] = [];
//   filteredSales: any[] = [];
//   loading = true;
//   searchTerm = '';

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.fetchSales();
//   }

//   fetchSales(): void {
//     // Dummy mock API (use any real one if you have)
//     this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe({
//       next: (data) => {
//         // Simulate sales data
//         this.sales = data.slice(0, 10).map((item, index) => ({
//           id: item.id,
//           product: item.title,
//           amount: Math.floor(Math.random() * 1000) + 100,
//           date: new Date().toLocaleDateString()
//         }));
//         this.filteredSales = [...this.sales];
//         this.loading = false;
//       },
//       error: (err) => {
//         console.error('Error fetching sales:', err);
//         this.loading = false;
//       }
//     });
//   }

//   searchSales(): void {
//     const term = this.searchTerm.toLowerCase();
//     this.filteredSales = this.sales.filter(sale =>
//       sale.product.toLowerCase().includes(term)
//     );
//   }

//   trackById(index: number, item: any): number {
//     return item.id;
//   }
// }













// import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-sales-widget',
//   standalone: true,
//   imports: [CommonModule, HttpClientModule, FormsModule],
//   templateUrl: './sales-widget.component.html',
//   styleUrls: ['./sales-widget.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush, // ✅ Performance optimization
// })
// export class SalesWidgetComponent implements OnInit {
//   sales: any[] = [];
//   filteredSales: any[] = [];
//   loading = true;
//   searchTerm = '';

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.fetchSales();
//   }

//   fetchSales(): void {
//     // ✅ Fetching mock data from JSONPlaceholder
//     this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe({
//       next: (data) => {
//         this.sales = data.slice(0, 10).map((item) => ({
//           id: item.id,
//           product: item.title,
//           amount: Math.floor(Math.random() * 1000) + 100,
//           date: new Date().toLocaleDateString(),
//         }));
//         this.filteredSales = [...this.sales];
//         this.loading = false;
//       },
//       error: (err) => {
//         console.error('Error fetching sales:', err);
//         this.loading = false;
//       },
//     });
//   }

//   searchSales(): void {
//     const term = this.searchTerm.toLowerCase();
//     this.filteredSales = this.sales.filter((sale) =>
//       sale.product.toLowerCase().includes(term)
//     );
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
// //   selector: 'app-sales-widget',
// //   templateUrl: './sales-widget.component.html',
// // })
// export class SalesWidgetComponent implements OnInit {
//   salesData: any[] = [];
//   loading = true;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')
//       .subscribe({
//         next: (data) => {
//           this.salesData = data;
//           this.loading = false;
//         },
//         error: (err) => {
//           console.error('Error loading sales data', err);
//           this.loading = false;
//         }
//       });
//   }

//   trackById(index: number, item: any) {
//     return item.id;
//   }
// }























// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-sales-widget',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './sales-widget.component.html',
//   styleUrls: ['./sales-widget.component.css'],
// })
// export class SalesWidgetComponent implements OnInit {
//   salesData: any[] = [];
//   filteredSales: any[] = [];
//   searchTerm: string = '';
//   loading = true;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')
//       .subscribe({
//         next: (data) => {
//           this.salesData = data;
//           this.filteredSales = data;
//           this.loading = false;
//         },
//         error: (err) => {
//           console.error('Error loading sales data', err);
//           this.loading = false;
//         },
//       });
//   }

//   searchSales() {
//     const term = this.searchTerm.toLowerCase();
//     this.filteredSales = this.salesData.filter((item) =>
//       item.title.toLowerCase().includes(term)
//     );
//   }

//   trackById(index: number, item: any) {
//     return item.id;
//   }
// }



















import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales-widget',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './sales-widget.component.html',
  styleUrls: ['./sales-widget.component.css']
})
export class SalesWidgetComponent {
  loading = true;
  searchTerm = '';
  sales: any[] = [];
  filteredSales: any[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.sales = 
        [
    { product: 'Laptop', amount: 55000, date: '2025-10-25' },
    { product: 'Phone', amount: 25000, date: '2025-10-26' },
    { product: 'Headphones', amount: 5000, date: '2025-10-27' }
  ];
      this.filteredSales = [...this.sales];
      this.loading = false;
    }, 1000);
  }

  searchSales() {
    this.filteredSales = this.sales.filter(sale =>
      sale.product.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
