import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// third party library
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// import Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';

// import Services
import { AuthService } from './services/auth.service';
import { ErrorService } from './services/error.service';
import { UsersService } from './services/users.service';

// import routing
import { routing } from 'app/app.routes';
import { HomeComponent } from './components/home/home.component';

// import shared
import { BtnGroupComponent } from './components/shared/btn-group/btn-group.component';
import { CheckboxComponent } from './components/shared/checkbox/checkbox.component';
import { ClickOutsideDirective } from './components/shared/clickOutside.directive';
import { DatePickerComponent } from './components/shared/date-picker/date-picker.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { DblDatepickerComponent } from './components/shared/dbl-datepicker/dbl-datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    CheckboxComponent,
    ClickOutsideDirective,
    DatePickerComponent,
    BtnGroupComponent,
    PlaygroundComponent,
    DblDatepickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgxDatatableModule,
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
