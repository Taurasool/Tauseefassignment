// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));













// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .then(() => {
//     const savedState = localStorage.getItem('dashboardState');
//     if (savedState) {
//       console.log('Restored State:', JSON.parse(savedState));
//     }
//   });

// window.addEventListener('beforeunload', () => {
//   const state = JSON.stringify(window['__ngrx__state']);
//   localStorage.setItem('dashboardState', state);
// });











// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .then(() => {
//     const savedState = localStorage.getItem('dashboardState');
//     if (savedState) {
//       console.log('Restored State:', JSON.parse(savedState));
//     }
//   })
//   .catch((err) => console.error(err));

// window.addEventListener('beforeunload', () => {
//   const state = JSON.stringify(window['__ngrx__state']);
//   localStorage.setItem('dashboardState', state);
// });












// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .then(() => {
//     const savedState = localStorage.getItem('dashboardState');
//     if (savedState) {
//       console.log('Restored State:', JSON.parse(savedState));
//     }
//   })
//   .catch((err) => console.error(err));

// declare global {
//   interface Window {
//     __ngrx__state?: any;
//   }
// }

// window.addEventListener('beforeunload', () => {
//   const state = JSON.stringify(window.__ngrx__state);
//   localStorage.setItem('dashboardState', state);
// });
















// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .then(() => {
//     const savedState = localStorage.getItem('dashboardState');
//     if (savedState) {
//       console.log('Restored State:', JSON.parse(savedState));
//     }
//   })
//   .catch((err) => console.error(err));

// // 👇 Yeh add karo — TypeScript ko window.__ngrx__state ke type ka pata chale
// declare global {
//   interface Window {
//     __ngrx__state?: any;
//   }
// }

// window.addEventListener('beforeunload', () => {
//   const state = JSON.stringify(window.__ngrx__state);
//   localStorage.setItem('dashboardState', state);
// });





















import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';

bootstrapApplication(AppComponent, appConfig)
  .then((appRef) => {
    // const store = inject(Store);
    // store.subscribe((state) => {
    //   window.__ngrx__state = state;
    // });








    const savedState = localStorage.getItem('dashboardState');
    if (savedState) {
      console.log('Restored State:', JSON.parse(savedState));
    }
  })
  .catch((err) => console.error(err));

declare global {
  interface Window {
    __ngrx__state?: any;
  }
}

window.addEventListener('beforeunload', () => {
  const state = JSON.stringify(window.__ngrx__state);
  localStorage.setItem('dashboardState', state);
});

