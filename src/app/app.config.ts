// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideHttpClient } from '@angular/common/http'; // 👈 yahan import add karo

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(routes),
//     provideHttpClient() // 👈 ye line add karo
//   ]
// };








// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideHttpClient } from '@angular/common/http';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { FormsModule } from '@angular/forms'; // 👈 ADD THIS LINE

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     provideHttpClient(),
//     provideAnimations(),
//   ],
// }











// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideHttpClient } from '@angular/common/http';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { provideStore } from '@ngrx/store';
// import { provideStoreDevtools } from '@ngrx/store-devtools';
// import { dashboardReducer } from './state/dashboard.reducer';
// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     provideHttpClient(),
//     provideAnimations(),
//     provideStore({ dashboard: dashboardReducer }), // 👈 Store registered here
//     provideStoreDevtools(), // 👈 Enables Redux DevTools for debugging
//   ],
// };








import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { dashboardReducer } from './state/dashboard.reducer'; // ✅ Correct path

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideStore({ dashboard: dashboardReducer }),
    provideStoreDevtools(),
  ],
};

