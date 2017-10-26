import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { LoginComponent } from 'app/components/login/login.component';
import { SignupComponent } from 'app/components/signup/signup.component';
import { HomeComponent } from 'app/components/home/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    // {
    //     path: 'profile/:userId',
    //     component: ProfileComponent
    // },
    {
        path: '**',
        redirectTo: 'login'
    }
];

export const routing = RouterModule.forRoot(routes);