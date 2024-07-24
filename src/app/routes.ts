import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    // Each entry is an object literal that represents a route
    {
        // The path represents which URL matches which component
        path: '', // This path is empty so that users will be sent to the home page by default
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    },
];

// We need the routeConfig variable to be available to files that import our routes, so we need to add an export line
export default routeConfig;