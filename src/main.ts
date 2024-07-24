import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    // This empty array represents our application routes
    provideRouter(routeConfig)
  ]
}).catch(err => console.error(err));
