import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import Components
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SignupComponent } from './Components/signup/signup.component';

// import Services
import { AuthService } from './Services/auth.service';
import { ErrorService } from './Services/error.service';
import { UsersService } from './Services/users.service';

// import routing
import { routing } from 'app/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthService,
    ErrorService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
