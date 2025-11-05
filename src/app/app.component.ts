// import { Component } from '@angular/core';
// import { DashboardComponent } from './components/dashboard/dashboard.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [DashboardComponent],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {}














import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    // 🔁 Whenever store changes, update window.__ngrx__state
    this.store.subscribe((state) => {
      (window as any).__ngrx__state = state;
    });
  }
}
