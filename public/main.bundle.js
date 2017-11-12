webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/Models/error.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error; });
var Error = /** @class */ (function () {
    function Error(success, message) {
        this.success = success;
        this.message = message;
    }
    return Error;
}());

//# sourceMappingURL=error.model.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(Auth) {
        this.Auth = Auth;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_error_service__ = __webpack_require__("../../../../../src/app/services/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_shared_btn_group_btn_group_component__ = __webpack_require__("../../../../../src/app/components/shared/btn-group/btn-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_shared_checkbox_checkbox_component__ = __webpack_require__("../../../../../src/app/components/shared/checkbox/checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_shared_clickOutside_directive__ = __webpack_require__("../../../../../src/app/components/shared/clickOutside.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_shared_date_picker_date_picker_component__ = __webpack_require__("../../../../../src/app/components/shared/date-picker/date-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_playground_playground_component__ = __webpack_require__("../../../../../src/app/components/playground/playground.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// third party library


// import Components




// import Services



// import routing


// import shared





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_shared_checkbox_checkbox_component__["a" /* CheckboxComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_shared_clickOutside_directive__["a" /* ClickOutsideDirective */],
                __WEBPACK_IMPORTED_MODULE_18__components_shared_date_picker_date_picker_component__["a" /* DatePickerComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_shared_btn_group_btn_group_component__["a" /* BtnGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_playground_playground_component__["a" /* PlaygroundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_13_app_app_routes__["a" /* routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__services_error_service__["a" /* ErrorService */],
                __WEBPACK_IMPORTED_MODULE_12__services_users_service__["a" /* UsersService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_components_playground_playground_component__ = __webpack_require__("../../../../../src/app/components/playground/playground.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1_app_components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_2_app_components_signup_signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3_app_components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'playground',
        component: __WEBPACK_IMPORTED_MODULE_4_app_components_playground_playground_component__["a" /* PlaygroundComponent */]
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
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to HiChat!!!</h1>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(el, fb) {
        this.el = el;
        this.fb = fb;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _b || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-panel {\n    margin: auto;\n    width: 40%;\n}\n\n.error-message {\n    padding-left: 20px;\n    color: red;\n}\n\nbutton:disabled {\n  cursor: not-allowed;\n  pointer-events: all !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card-panel login-panel\">\n        <form class=\"col s12\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n            <h4 class=\"center-align\">Login</h4>\n            <!-- error message -->\n            <div class=\"row\" *ngIf=\"errors?.summary\">\n              <p class=\"error-message\">{{ errors.summary }}</p>\n            </div>\n            <!-- email -->\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input \n                          class=\"validate\" \n                          id=\"email\" \n                          type=\"email\" \n                          name=\"email\" \n                          formControlName=\"email\"\n                          required />\n                    <label for='email'>Email</label>\n                </div>\n            </div>\n            <!-- email error message -->\n            <div class=\"row\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n              <p class=\"error-message\" *ngIf=\"email.errors.required\">Email is required, please enter your email address.</p>\n              <p class=\"error-message\" *ngIf=\"email.errors.pattern\">Not a valid email address, please enter another one.</p>\n            </div>\n            <!-- password -->\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input \n                          class=\"validate\" \n                          id=\"password\" \n                          type=\"password\" \n                          name=\"password\" \n                          formControlName=\"password\"\n                          required/>\n                    <label for='password'>Password</label>\n                </div>\n            </div>\n            <!-- password error message -->\n            <div class=\"row\" *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n              <p class=\"error-message\" *ngIf=\"password.errors.required\">Password is required, please enter your password.</p>\n            </div>\n            <!-- login button -->\n            <div class=\"row right-align\">\n                <button \n                      type=\"submit\" \n                      class=\"waves-effect waves-light btn indigo lighten-1\" \n                      [disabled]=\"!loginForm.valid\">Log in</button>\n            </div>\n            <div class=\"row\">\n                <p class=\"right-align\"> New to HiChat?  <a [routerLink]=\"['/signup']\">Sign Up</a></p>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.errors = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.loginForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_4_app_models_user_model__["a" /* User */](this.loginForm.value.email, this.loginForm.value.password);
        this.authService.login(user)
            .subscribe(function (response) {
            console.log(response);
            if (response.status === 200) {
                _this.authService.authenticateUser(response.token, _this.loginForm.value.email);
                _this.router.navigate(['/home']);
            }
            else {
                console.log('Login failed');
                console.log(response);
            }
        }, function (error) {
            _this.errors.summary = error.message;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-wrapper {\n    background-color: transparent;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">    \n    <nav class=\"nav-bar indigo lighten-1\">\n        <div class=\"nav-wrapper\">\n          <div class=\"col s12\">\n            <a href=\"/\" class=\"brand-logo\">HiChat</a>\n            <ul id=\"nav-mobile\" class=\"right\">\n              <div *ngIf=\"Auth.isUserAuthenticated(); else unAuthenticated\">\n                  <li><input type=\"text\" placeholder=\"Search\"></li>\n                  <li><a [routerLink]=\"['/profile']\">Profile</a></li>\n                  <li>{{ Auth.getEmail() }}</li>  \n                  <li><a [routerLink]=\"['/login']\" (click)=\"logout()\">Log out</a></li>\n              </div>\n                <!-- User is not login case  -->\n              <ng-template #unAuthenticated>\n                  <li><a [routerLink]=\"['/login']\">Log in</a></li>    \n                  <li><a [routerLink]=\"['/signup']\">Sign up</a></li> \n              </ng-template> \n            </ul>\n          </div>\n        </div>\n    </nav>\n    <br/>\n    \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(Auth) {
        this.Auth = Auth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.Auth.deauthenticate();
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/playground/playground.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tableCell-align {\n  margin-top: 3.5px;\n}\ninput.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n.warning-block {\n  color: #dc3545;\n}\n.activeRow {\n  background-color: #f9ca07 !important;\n}\ntable.table-striped.table-bordered {\n  overflow: auto;\n}\ntable.table-striped.table-bordered tr {\n  height: 35px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playground/playground.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form [formGroup]=\"ee1Form\">\n        <input \n          type=\"text\" \n          class=\"form-control\" \n          placeholder=\"Search for user to chat\"\n          name=\"searchUser\"\n          formControlName=\"searchUser\"\n          >\n          <span \n            class=\"warning-block\"\n            *ngIf=\"!ee1Form.get('searchUser').valid && ee1Form.get('searchUser').touched\">Please enter a username</span>\n    \n        <div class=\"card bg-light mt-3\">\n            <div class=\"form-group ml-3 mt-3\">\n                <label for=\"\">Datepicker</label>\n                <date-picker \n                  [(dates)]=\"testDate\" \n                  [require]=\"true\" \n                  [future]=\"true\"\n                  formControlName=\"testDatepicker\"\n                  >\n                </date-picker>\n              </div>\n        </div>\n        <div class=\"card bg-light mt-3\">\n            <div class=\"form-group mt-3\">\n                <checkbox \n                  [size]=\"'sm'\" \n                  [label]=\"'No Medical Condition'\" \n                  [position]=\"'right'\" \n                  [(check)]=\"noMedicalConditionFlag\" \n                  (checkChange)=\"noMedicalCondition(noMedicalConditionFlag)\"\n                  formControlName=\"testCheckbox\">\n                </checkbox>\n            </div>\n        </div>\n        <div class=\"card bg-light mt-3\">\n            <div class=\"form-group mt-3 ml-3\">\n                <btn-radio \n                  [btnItem]=\"address\" \n                  [(selectedBtn)]=\"addressSelection\" \n                  (selectedBtnChange)=\"addressChange($event)\"\n                  formControlName=\"testBtnGroup\"></btn-radio>\n            </div>\n        </div>\n\n        <!-- Success -->\n        <div class=\"card bg-light mt-3\">\n            <div class=\"row form-group m-3\" formArrayName=\"conditions\">\n                <table class=\"table table-striped table-bordered\">\n                  <thead>\n                      <tr>\n                          <th>Active</th>\n                          <th>Condtion Type</th>\n                          <th>Condition</th>\n                          <th>Date Of Diagnosis</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor=\"let row of ee1Form.get('conditions').controls; let i = index;\" \n                          (click)=\"selectRow(i)\" \n                          [ngClass]=\"{ activeRow: ee1Form.get('conditions').controls[i].value.active }\"\n                          >\n                          <td>{{ row.value | json }}</td>\n                          <td [formGroupName]=\"i\">\n                              <select\n                                  *ngIf=\"!row.value.dummy\"\n                                  class=\"form-control tableCell-align\"\n                                  formControlName=\"conditionType\">\n                                <option value=\"\">Select Condition Type</option>\n                                <option [ngValue]=\"row.conditionType\">{{ row.conditionType }}</option>\n                              </select>\n                          </td>\n                          <td [formGroupName]=\"i\">\n                              <input \n                                  *ngIf=\"!row.value.dummy\"\n                                  type=\"text\" \n                                  class=\"form-control tableCell-align\"\n                                  formControlName=\"condition\"\n                                  name=\"condition\"\n                              >\n                          </td>\n                          <td [formGroupName]=\"i\">\n                            <date-picker\n                              *ngIf=\"!row.value.dummy\"\n                              formControlName=\"dateOfDiagnosis\"\n                              [(dates)]=\"row.dateOfDiagnosis\" \n                              [require]=\"'false'\" \n                              [future]=\"true\"\n                              [customClass]=\"'dpFullWidth'\"\n                              style=\"width: 100%;\"\n                            ></date-picker>\n                          </td>\n                      </tr>\n                  </tbody>\n                </table>\n            </div>\n            <div class=\"row form-group mx-0\">\n                <div class=\"col-md-3 mt-2\">\n                  <checkbox [size]=\"'sm'\" [label]=\"'No Medical Condition'\" [position]=\"'right'\" [(check)]=\"noMedicalConditionFlag\" (checkChange)=\"noMedicalCondition(noMedicalConditionFlag)\"></checkbox>\n                </div>\n                <div class=\"col-md-4 offset-md-5\">\n                  <button \n                    class=\"btn btn-primary\" \n                    (click)=\"addRow()\" \n                    type=\"button\">\n                    Add Condition\n                  </button>\n                  <button \n                    class=\"btn btn-secondary\" \n                    (click)=\"removeRow()\" \n                    type=\"button\">\n                    Remove Condition\n                  </button>\n                </div>\n            </div>\n        </div>\n\n        \n\n        <div class=\"card bg-light mt-3\">\n            <div class=\"row form-group\">\n              <div class=\"col-md-3 ml-auto mt-3\">\n                  <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!ee1Form.valid\">Submit Form</button>\n                  <button class=\"btn btn-default\" type=\"reset\">reset</button>\n              </div>\n            </div>\n        </div>\n    </form>  \n\n   \n    <!-- To be continue -->\n        <div class=\"card bg-light mt-3\">\n            <h3>Diagnosed Condition</h3>\n            {{ rows | json }}\n            <div class=\"mb-3 mt-3\" style=\"z-index: 1;\">\n                <ngx-datatable\n                    #mydatatable\n                    class=\"bootstrap\"\n                    (select)=\"onSelect($event)\"\n                    [selectionType]=\"'single'\"\n                    [selectCheck]=\"checkSelectedRow\"\n                    [selected]=\"selected\"\n                    [columnMode]=\"'force'\"\n                    [rowClass]=\"getRowClass\"\n                    [rowHeight]=\"35\"\n                    [rows]=\"ee1Form.get('conditions').controls\"\n                    [messages]=\"{'emptyMessage': 'Please add conditions'}\"\n                >\n                <ngx-datatable-column name=\"Condition Type\">\n                  <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n                    <select\n                        *ngIf=\"!row.dummy\"\n                        name=\"conditionType\"\n                        [(ngModel)]=\"row.conditionType\"\n                        class=\"form-control tableCell-align\">\n                      <option value=\"\">Select Condition Type</option>\n                      <option [ngValue]=\"row.conditionType\">{{ row.conditionType }}</option>\n                    </select>\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Condition\">\n                  <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n                    <input \n                        *ngIf=\"!row.dummy\"\n                        type=\"text\" \n                        class=\"form-control tableCell-align\"\n                        [(ngModel)]=\"condition\"\n                        name=\"condition\"\n                        >\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Date of Diagnosis\">\n                  <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n                      <div class=\"form-inline\" *ngIf=\"!row.dummy\">\n                          <date-picker \n                              [(dates)]=\"row.dateOfDiagnosis\" \n                              [require]=\"'false'\" \n                              [future]=\"true\"\n                              [customClass]=\"'dpFullWidth'\"\n                              class=\"tableCell-align\"\n                              style=\"width: 100%;\"\n                              ></date-picker>\n                      </div>\n                  </ng-template>\n                </ngx-datatable-column>\n              </ngx-datatable>\n            </div>\n            <div class=\"row form-group mx-0\">\n                <div class=\"col-md-3 mt-2\">\n                  <checkbox [size]=\"'sm'\" [label]=\"'No Medical Condition'\" [position]=\"'right'\" [(check)]=\"noMedicalConditionFlag\" (checkChange)=\"noMedicalCondition(noMedicalConditionFlag)\"></checkbox>\n                </div>\n                <div class=\"col-md-4 offset-md-5\">\n                  <button \n                    class=\"btn btn-primary\" \n                    (click)=\"addRow()\" \n                    type=\"button\">\n                    Add Condition\n                  </button>\n                  <button \n                    class=\"btn btn-secondary\" \n                    (click)=\"removeRow()\" \n                    type=\"button\">\n                    Remove Condition\n                  </button>\n                </div>\n            </div>\n        </div>\n\n   \n\n    <div class=\"card bg-light mt-3\">\n      <div class=\"row form-group\">\n        <div class=\"col-md-2 ml-auto mt-3\">\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!ee1Form.valid\" (click)=\"submitForm()\">Submit</button>\n            <button class=\"btn btn-default\" type=\"reset\">reset</button>\n        </div>\n      </div>\n    </div>\n\n    <pre>{{ ee1Form.value | json }}</pre>\n</div>\n  \n\n    \n\n"

/***/ }),

/***/ "../../../../../src/app/components/playground/playground.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_date_picker_date_picker_validators__ = __webpack_require__("../../../../../src/app/components/shared/date-picker/date-picker.validators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaygroundComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaygroundComponent = /** @class */ (function () {
    function PlaygroundComponent(el, fb) {
        this.el = el;
        this.fb = fb;
        this.address = [
            { name: "Domestic", value: "domestic" },
            { name: "Foreign", value: "foreign" }
        ];
        this.noMedicalConditionFlag = false;
        this.rows = [];
        this.selected = [];
        this.tableFixedRowSize = 6;
        this.dummyRows = this.rows;
    }
    PlaygroundComponent.prototype.ngOnInit = function () {
        this.addressSelection = this.address[0].value;
        // this.initConditions();
        this.ee1Form = this.fb.group({
            'searchUser': ['Neal', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'testDatepicker': [null, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_date_picker_date_picker_validators__["a" /* DatepickerValidator */])(true, null)],
            'testCheckbox': [null, null],
            'testBtnGroup': [this.address[0].value, null],
            'conditions': this.fb.array([])
        });
        this.initConditions();
    };
    PlaygroundComponent.prototype.initConditions = function () {
        var defaultCondition = {
            "conditionType": "",
            "condition": "",
            "dateOfDiagnosis": "",
            "dummy": true,
            "active": false,
            "index": 0
        };
        var newCondition;
        var conditionFormGroup;
        for (var i = 0; i < this.tableFixedRowSize; i++) {
            newCondition = __assign({}, defaultCondition);
            newCondition.index = i;
            conditionFormGroup = this.fb.group({
                "conditionType": [null],
                "condition": [null],
                "dateOfDiagnosis": [null],
                "dummy": [true],
                "active": [false],
                "index": [i]
            });
            this.rows.push(newCondition);
            this.ee1Form.get('conditions').push(conditionFormGroup);
        }
    };
    PlaygroundComponent.prototype.getCellClass = function (_a) {
        var row = _a.row, column = _a.column, value = _a.value;
        return {
            'table-cell': true
        };
    };
    PlaygroundComponent.prototype.getRowClass = function (row) {
        return {
            'activeRowClass': row.active
        };
    };
    PlaygroundComponent.prototype.checkSelectedRow = function (row, column, value) {
        console.log(row);
        return !row.dummy;
    };
    PlaygroundComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        // console.log('Select Event', selected, this.selected);
        if (selected && selected[0] && !selected[0].dummy) {
            if (this.prevSelected) {
                this.prevSelected[0].active = false;
            }
            selected[0].active = true;
            this.prevSelected = selected;
        }
    };
    PlaygroundComponent.prototype.selectRow = function (index) {
        console.log(this.prevSelectedIndex);
        if (this.prevSelectedIndex !== undefined) {
            this.ee1Form.get('conditions').controls[this.prevSelectedIndex].value.active = false;
        }
        this.ee1Form.get('conditions').controls[index].value.active = true;
        this.prevSelectedIndex = index;
    };
    PlaygroundComponent.prototype.addRow = function () {
        var newRow = {
            "conditionType": "",
            "condition": "",
            "dateOfDiagnosis": "",
            "dummy": false,
            "active": true,
            "index": 0
        };
        var newSelectedObj = {
            selected: {
                "0": newRow
            }
        };
        var conditionFormGroup;
        var i = 0;
        for (; i < this.rows.length; i++) {
            if (this.ee1Form.get('conditions').controls[i].value.active) {
                this.ee1Form.get('conditions').controls[i].value.active = false;
            }
            if (this.rows[i].dummy) {
                // update the index
                newRow.index = i;
                // const newRowControl = this.fb.control(newRow);
                conditionFormGroup = this.fb.group({
                    "conditionType": [null],
                    "condition": [null],
                    "dateOfDiagnosis": [null],
                    "dummy": [false],
                    "active": [true],
                    "index": [i]
                });
                // remove old row and add newRow to rows
                this.rows.splice(i, 1, newRow);
                // setControl replace an existing control
                this.ee1Form.get('conditions').setControl(i, conditionFormGroup);
                // this.checkSelectedRow(newRow, null, null);
                this.onSelect(newSelectedObj);
                break;
            }
        }
        if (i === this.rows.length) {
            newRow.index = i;
            this.rows.push(newRow);
            conditionFormGroup = this.fb.group({
                "conditionType": [null],
                "condition": [null],
                "dateOfDiagnosis": [null],
                "dummy": [false],
                "active": [true],
                "index": [i]
            });
            this.ee1Form.get('conditions').push(conditionFormGroup);
            this.onSelect(newSelectedObj);
        }
    };
    PlaygroundComponent.prototype.removeRow = function () {
        var dummyRow = {
            "conditionType": "",
            "condition": "",
            "dateOfDiagnosis": "",
            "dummy": true,
            "active": false,
            "index": this.rows.length
        };
        var removeIndex = this.selected[0].index;
        if (this.rows.length > this.tableFixedRowSize) {
            this.rows.splice(removeIndex, 1);
            this.ee1Form.get('conditions').removeAt(removeIndex);
        }
        else {
            this.rows.splice(removeIndex, 1);
            this.ee1Form.get('conditions').removeAt(removeIndex);
            this.rows.push(dummyRow);
            this.ee1Form.get('conditions').push(this.fb.control(dummyRow));
        }
        // update subsequent index
        for (var i = removeIndex; i < this.rows.length; i++) {
            this.rows[i].index--;
            this.ee1Form.get('conditions').setControl(i, this.fb.control(this.rows[i]));
        }
    };
    PlaygroundComponent.prototype.compareFunction = function (a, b) {
        return a.dummy ? b : a;
    };
    PlaygroundComponent.prototype.noMedicalCondition = function (noMedicalConditionFlag) {
        if (noMedicalConditionFlag) {
            this.rows = this.dummyRows;
        }
    };
    PlaygroundComponent.prototype.addressChange = function () {
    };
    PlaygroundComponent.prototype.submitForm = function () {
        console.log(this.ee1Form);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container'),
        __metadata("design:type", Object)
    ], PlaygroundComponent.prototype, "container", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input[ngbDatepicker]'),
        __metadata("design:type", Object)
    ], PlaygroundComponent.prototype, "datePicker", void 0);
    PlaygroundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-playground',
            template: __webpack_require__("../../../../../src/app/components/playground/playground.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/playground/playground.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _b || Object])
    ], PlaygroundComponent);
    return PlaygroundComponent;
    var _a, _b;
}());

//# sourceMappingURL=playground.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/btn-group/btn-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-default {\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n}\r\n.active {\r\n  background-color: #449d44;\r\n  color: #ffffff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/btn-group/btn-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"selectedBtn\" (ngModelChange)=\"change($event)\">\r\n    <label class=\"btn-default px-2\" ngbButtonLabel *ngFor=\"let btn of btnItem\">\r\n    <input type=\"radio\" ngbButton [value]=\"btn.value\"> {{btn.name}}\r\n  </label>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shared/btn-group/btn-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BtnGroupComponent = /** @class */ (function () {
    function BtnGroupComponent() {
        this.selectedBtnChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Implement ControlValueAccessor method below */
        this.propagateChange = function (_) { };
    }
    BtnGroupComponent_1 = BtnGroupComponent;
    BtnGroupComponent.prototype.ngOnInit = function () {
    };
    BtnGroupComponent.prototype.change = function (newValue) {
        this.selectedBtn = newValue;
        this.selectedBtnChange.emit(newValue);
        this.propagateChange(newValue);
    };
    /** writeValue(obj: any) is the method that writes a new value from the form model into the view or (if needed) DOM property. */
    BtnGroupComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.selectedBtn = value;
        }
    };
    /**
     * registerOnChange(fn: any) is a method that registers a handler that should be called when something in the view has changed.
     * It gets a function that tells other form directives and form controls to update their values.
     * registerOnChange() has access to a function that informs the outside world about changes.
     * Here’s where we can do special work, whenever we propagate the change, if we wanted to.
     */
    BtnGroupComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * registerOnTouched(fn: any) Similiar to registerOnChange(), this registers a handler specifically for when a control receives
     * a touch event.
     * */
    BtnGroupComponent.prototype.registerOnTouched = function (fn) {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BtnGroupComponent.prototype, "btnItem", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BtnGroupComponent.prototype, "selectedBtn", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BtnGroupComponent.prototype, "type", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], BtnGroupComponent.prototype, "selectedBtnChange", void 0);
    BtnGroupComponent = BtnGroupComponent_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'btn-radio',
            template: __webpack_require__("../../../../../src/app/components/shared/btn-group/btn-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/btn-group/btn-group.component.css")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return BtnGroupComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], BtnGroupComponent);
    return BtnGroupComponent;
    var BtnGroupComponent_1;
}());

//# sourceMappingURL=btn-group.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/checkbox/checkbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".styleBtn {\n    padding: 1px 3px;\n    font-size: 10px;\n    height: 18px;\n}\n\n.styleIcon {\n    width: 10px;\n    left: -1px;\n    font-size: 12px;\n    color: #008000;\n}\n\n.checkbox {\n    width: 10px;\n    height: 10px;\n}\n\n.fa.fa-check-square-o {\n    width: 10px;\n    height: 10px;\n}\n\nbutton {\n    border: 0px solid;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/checkbox/checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"changeCheckbox($event)\">\n    <label *ngIf=\"position === 'left'\">{{ label }}</label>\n    <span \n        class=\"fa mx-3\"\n        [ngClass]=\"{'fa-check-square-o ': checked, 'fa-square-o': !checked, 'fa-lg': size === 'sm', 'fa-2x': size === 'md', 'fa-3x': size === 'lg'}\"\n        aria-hidden=\"true\">\n    </span>\n    <label *ngIf=\"position === 'right'\" class=\"mr-3\">{{ label }}</label>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/checkbox/checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.checked = false;
        this.checkChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Implement ControlValueAccessor method below */
        this.propagateChange = function (_) { };
    }
    CheckboxComponent_1 = CheckboxComponent;
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    CheckboxComponent.prototype.changeCheckbox = function () {
        this.checked = !this.checked;
        this.checkChange.emit(this.checked);
        this.propagateChange(this.checked);
    };
    /** writeValue(obj: any) is the method that writes a new value from the form model into the view or (if needed) DOM property. */
    CheckboxComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.checked = value;
        }
    };
    /**
     * registerOnChange(fn: any) is a method that registers a handler that should be called when something in the view has changed.
     * It gets a function that tells other form directives and form controls to update their values.
     * registerOnChange() has access to a function that informs the outside world about changes.
     * Here’s where we can do special work, whenever we propagate the change, if we wanted to.
     */
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * registerOnTouched(fn: any) Similiar to registerOnChange(), this registers a handler specifically for when a control receives
     * a touch event.
     * */
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "check", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "label", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "size", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "position", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "checkChange", void 0);
    CheckboxComponent = CheckboxComponent_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checkbox',
            template: __webpack_require__("../../../../../src/app/components/shared/checkbox/checkbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/checkbox/checkbox.component.css")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CheckboxComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
    var CheckboxComponent_1;
}());

//# sourceMappingURL=checkbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/clickOutside.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[clickOutside]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
    var _a;
}());

//# sourceMappingURL=clickOutside.directive.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/date-picker/date-picker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-default {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  font-size: 12px;\n  cursor: pointer;\n}\n.form-control-feedback {\n  color: #dc3545;\n}\nbutton.input-group-addon {\n  padding: 1px 6px;\n}\n.invalidDp input.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n.invalidDp button.input-group-addon {\n  border-right: 1px solid red;\n  border-top: 1px solid red;\n  border-bottom: 1px solid red;\n}\n.dpFullWidth div.input-group {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/date-picker/date-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\" #dpFormRef=\"ngForm\" [ngClass]=\"customClass\">\r\n    <div class=\"input-group\" [ngClass]=\"{ invalidDp: dp.invalid && dp.touched }\">\r\n        <input \r\n            class=\"form-control\" \r\n            placeholder=\"mm/dd/yyyy\"\r\n            name=\"dp\" id=\"dp\" #dp=\"ngModel\" \r\n            [required]=\"require\"\r\n            [maxDate]=\"maxDate\" \r\n            [(ngModel)]=\"dates\" \r\n            ngbDatepicker \r\n            #d=\"ngbDatepicker\"  \r\n            (ngModelChange)=\"onDateChanged($event)\"\r\n        >\r\n        <button class=\"input-group-addon\" type=\"button\" (click)=\"d.toggle()\">\r\n            <i class=\"fa fa-calendar\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"></i>\r\n        </button>\r\n    </div>\r\n    <div *ngIf=\"dp.invalid && dp.touched\"\r\n        class=\"p-1\">\r\n        {{ dp.errors | json }}\r\n        <div class=\"form-control-feedback\" *ngIf=\"dp.errors.required\">\r\n            Date is required.\r\n        </div>\r\n        <div class=\"form-control-feedback\" *ngIf=\"dp.errors.ngbDate && dp.errors.ngbDate.invalid\">\r\n            format is not correct.\r\n        </div>\r\n        <div class=\"form-control-feedback\" *ngIf=\"dp.errors.ngbDate && dp.errors.ngbDate.requiredAfter\">\r\n            Future date is not allowed\r\n        </div>\r\n    </div>\r\n</form>\r\n      \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/date-picker/date-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngb_date_fr_parser_formatter__ = __webpack_require__("../../../../../src/app/components/shared/date-picker/ngb-date-fr-parser-formatter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date_picker_validators__ = __webpack_require__("../../../../../src/app/components/shared/date-picker/date-picker.validators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent() {
        this.datesChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.currentDate = new Date();
        this.pattern = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
        /** Implement ControlValueAccessor method below */
        this.propagateChange = function (_) { };
    }
    DatePickerComponent_1 = DatePickerComponent;
    DatePickerComponent.prototype.changeFormat = function (item) {
        var selectDate = new Date(item);
        item = {
            year: selectDate.getFullYear(),
            month: selectDate.getMonth() + 1,
            day: selectDate.getDate()
        };
        return item;
    };
    DatePickerComponent.prototype.ngOnInit = function () {
        // this.maxDate = this.future?"-":{year:this.currentDate.getFullYear(), month:this.currentDate.getMonth()+1, day:this.currentDate.getDate()};
        // DatepickerValidator(this.maxDate);
    };
    DatePickerComponent.prototype.ngOnChanges = function (changes) {
        this.maxDate = this.future ? "-" : { year: this.currentDate.getFullYear(), month: this.currentDate.getMonth() + 1, day: this.currentDate.getDate() };
        this.validateFn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__date_picker_validators__["a" /* DatepickerValidator */])(this.require, this.maxDate);
    };
    DatePickerComponent.prototype.validate = function (c) {
        return this.validateFn(c);
    };
    DatePickerComponent.prototype.onDateChanged = function (event) {
        // structure like { year: 2017, month: 11, day: 10 }
        if (this.pattern.test(event)) {
            var selectDate = new Date(event);
            event = {
                year: selectDate.getFullYear(),
                month: selectDate.getMonth() + 1,
                day: selectDate.getDate()
            };
        }
        this.datesChange.emit(event);
        this.propagateChange(event);
    };
    /** writeValue(obj: any) is the method that writes a new value from the form model into the view or (if needed) DOM property. */
    DatePickerComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.dates = value;
        }
    };
    /**
     * registerOnChange(fn: any) is a method that registers a handler that should be called when something in the view has changed.
     * It gets a function that tells other form directives and form controls to update their values.
     * registerOnChange() has access to a function that informs the outside world about changes.
     * Here’s where we can do special work, whenever we propagate the change, if we wanted to.
     */
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * registerOnTouched(fn: any) Similiar to registerOnChange(), this registers a handler specifically for when a control receives
     * a touch event.
     * */
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "customClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "dates", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "require", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "future", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "datesChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dp'),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "dp", void 0);
    DatePickerComponent = DatePickerComponent_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'date-picker',
            template: __webpack_require__("../../../../../src/app/components/shared/date-picker/date-picker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/date-picker/date-picker.component.css")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbDateParserFormatter */],
                    useClass: __WEBPACK_IMPORTED_MODULE_3__ngb_date_fr_parser_formatter__["a" /* NgbDateFRParserFormatter */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DatePickerComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DatePickerComponent);
    return DatePickerComponent;
    var DatePickerComponent_1;
}());

//# sourceMappingURL=date-picker.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/date-picker/date-picker.validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = DatepickerValidator;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function changeFormat(date) {
    // date comes in strcture like { year: 2017, month: 8, day: 8 }
    var copyOfOriginalDt = __assign({}, date);
    if (date) {
        copyOfOriginalDt.month = date.month < 10 ? '0' + date.month : date.month;
        copyOfOriginalDt.day = date.day < 10 ? '0' + date.day : date.day;
        copyOfOriginalDt.year = date.year;
        var formatedDate = copyOfOriginalDt.month + "/" + copyOfOriginalDt.day + "/" + copyOfOriginalDt.year;
        return formatedDate;
    }
}
function checkDateRange(selectedDate, maxDate) {
    if (maxDate instanceof Date) {
        // convert maxDate to the following structure
        maxDate = {
            year: maxDate.getFullYear(),
            month: maxDate.getMonth() + 1,
            day: maxDate.getDate()
        };
    }
    // Initialize MaxDt and SelectedDt
    // According to the specification, the maximum date is new Date(8640000000000000) (Sat, 13 Sep 275760 00:00:00 GMT)
    var MaxDt = new Date(8640000000000000), SelectedDt = new Date();
    if (maxDate && maxDate.year && maxDate.month && maxDate.day) {
        MaxDt = new Date(maxDate.year, maxDate.month - 1, maxDate.day);
        SelectedDt = new Date(selectedDate.year, selectedDate.month - 1, selectedDate.day);
    }
    console.log(MaxDt);
    console.log(SelectedDt);
    return SelectedDt <= MaxDt;
}
var pattern = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
function DatepickerValidator(require, maxDate) {
    return function validateDatepicker(c) {
        // console.log('validator');
        // console.log(require);
        // console.log(maxDate);
        // console.log(c.value);
        // console.log(changeFormat(c.value));
        // console.log(pattern.test(changeFormat(c.value)));
        // console.log('-------');
        var err = {
            datepickerErrMsg: {
                given: c.value,
                required: c.value == null ? 'Datepicker is required' : null,
                format: !pattern.test(changeFormat(c.value)) ? 'Format is incorrect' : null,
                futureDate: !checkDateRange(c.value, maxDate) ? 'Cannot enter a future date' : null
            }
        };
        // required && valid format && valid date range
        var result = c.value !== null && pattern.test(changeFormat(c.value)) && checkDateRange(c.value, maxDate) ? null : err;
        // console.log('result', result);
        return require ? result : null;
    };
}
//# sourceMappingURL=date-picker.validators.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/date-picker/ngb-date-fr-parser-formatter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDateFRParserFormatter; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return "";
    }
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt("" + value, 10);
}
var NgbDateFRParserFormatter = /** @class */ (function (_super) {
    __extends(NgbDateFRParserFormatter, _super);
    function NgbDateFRParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateFRParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('/');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null };
            }
            else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[2]), month: toInteger(dateParts[0]), day: toInteger(dateParts[1]) };
            }
        }
        return null;
    };
    NgbDateFRParserFormatter.prototype.format = function (date) {
        var stringDate = "";
        if (date) {
            stringDate += isNumber(date.month) ? padNumber(date.month) + "/" : "";
            stringDate += isNumber(date.day) ? padNumber(date.day) + "/" : "";
            stringDate += date.year;
        }
        return stringDate;
    };
    NgbDateFRParserFormatter = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], NgbDateFRParserFormatter);
    return NgbDateFRParserFormatter;
}(__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbDateParserFormatter */]));

//# sourceMappingURL=ngb-date-fr-parser-formatter.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateEqualValidator;
function validateEqualValidator(password_key, confirm_password_key) {
    return function (group) {
        var password = group.controls[password_key];
        var confirm_password = group.controls[confirm_password_key];
        if (password.value !== confirm_password.value) {
            return {
                mismatchedPasswords: true
            };
        }
    };
}
//# sourceMappingURL=equal-validator.directive.js.map

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-panel {\n    margin: auto;\n    width: 40%;\n}\n\n.error-message {\n    padding-left: 20px;\n    color: red;\n}\n\nbutton:disabled {\n  cursor: not-allowed;\n  pointer-events: all !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card-panel login-panel\">\n        <form class=\"col s12\" [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n            <h4 class=\"center-align\">Sign up</h4>\n            <!-- error message -->\n            <div class=\"row\" *ngIf=\"errors?.summary\">\n              <p class=\"error-message\">{{ errors.summary }}</p>\n            </div>\n            \n            <!-- username -->\n            <!-- <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input \n                          class=\"validate\" \n                          id=\"username\" \n                          type=\"text\" \n                          name=\"username\" \n                          formControlName=\"username\" \n                          required />\n                    <label for='username'>Username</label>\n                </div>\n            </div> -->\n            <!-- username error message -->\n            <!-- <div class=\"row\" *ngIf=\"username.invalid && (username.dirty || username.touched)\">\n              <p class=\"error-message\" *ngIf=\"username.errors.required\">Username is required, please enter your username.</p>\n            </div> -->\n\n            <!-- email -->\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input \n                          class=\"validate\" \n                          id=\"email\" \n                          type=\"email\" \n                          name=\"email\" \n                          formControlName=\"email\"\n                          required />\n                    <label for='email'>Email</label>\n                </div>\n            </div>\n            <!-- email error message -->\n            <div class=\"row\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n              <p class=\"error-message\" *ngIf=\"email.errors.required\">Email is required, please enter your email address.</p>\n              <p class=\"error-message\" *ngIf=\"email.errors.pattern\">Not a valid email address, please enter another one.</p>\n            </div>\n            <!-- password -->\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input \n                          class=\"validate\" \n                          id=\"password\" \n                          type=\"password\" \n                          name=\"password\" \n                          formControlName=\"password\" />\n                    <label for='password'>Password</label>\n                </div>\n            </div>\n            <!-- password error message -->\n            <div class=\"row\" *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n              <p class=\"error-message\" *ngIf=\"password.errors.required\">Password is required, please enter your password.</p>\n            </div> \n            <!-- confirm password -->\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input \n                          id=\"confirm_password\" \n                          type=\"password\" \n                          name=\"confirm_password\" \n                          class=\"validate\" \n                          formControlName=\"confirm_password\" />\n                    <label for=\"confirm_password\">Confirm Password</label>\n                </div>\n            </div>\n            <!-- confirm_password error message -->\n            <div class=\"row\" *ngIf=\"confirm_password.dirty || confirm_password.touched\">\n                <p class=\"error-message\" *ngIf=\"confirm_password.errors?.required\">Confirm password is required, please enter your confirm password.</p>  \n                <p class=\"error-message\" *ngIf=\"!confirm_password.errors && signupForm.hasError('mismatchedPasswords')\">Password not matched.</p>\n            </div>\n            <!-- signup button -->\n            <div class=\"row right-align\">\n                <button \n                        type=\"submit\"\n                        id=\"signupBtn\"\n                        [disabled]=\"!signupForm.valid\"\n                        class=\"waves-effect waves-light btn indigo lighten-1\">Sign up</button>\n            </div>\n            <div class=\"row\">\n                <p class=\"right-align\"> Already have an account?  <a [routerLink]=\"['/login']\">Login</a></p>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_components_shared_equal_validator_directive__ = __webpack_require__("../../../../../src/app/components/shared/equal-validator.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, fb, router) {
        this.authService = authService;
        this.fb = fb;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            confirm_password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        }, { validator: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_app_components_shared_equal_validator_directive__["a" /* validateEqualValidator */])('password', 'confirm_password') });
    };
    Object.defineProperty(SignupComponent.prototype, "email", {
        get: function () {
            return this.signupForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "password", {
        get: function () {
            return this.signupForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "confirm_password", {
        get: function () {
            return this.signupForm.get('confirm_password');
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var userInfo = new __WEBPACK_IMPORTED_MODULE_4_app_models_user_model__["a" /* User */](this.signupForm.value.email, this.signupForm.value.password);
        this.authService.signup(userInfo)
            .subscribe(function () {
            _this.router.navigateByUrl('/login');
        });
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_service__ = __webpack_require__("../../../../../src/app/services/error.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
    }
    /**
     * Register a user.
     */
    AuthService.prototype.signup = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('api/v1/auth/signup', body, options)
            .map(function (response) { return response.json(); });
        // .toPromise()
        // .then(function (res) {
        //     console.log('signup returned below');
        //     console.log(res);
        // })
        // .map((response: Response) => response.json())
        // .catch((error: Response) => {
        //     this.errorService.handleError(error.json());
        //     return Observable.throw(error.json());
        // });
    };
    /**
     * User login
     */
    AuthService.prototype.login = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('api/v1/auth/login', body, options)
            .map(function (response) {
            var res = response.json();
            res.status = response.status;
            return res;
        })
            .catch(function (error) {
            console.log('auth error');
            _this.errorService.handleError(error.json());
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json());
        });
        // .toPromise()
        // .then(function (res) {
        //     return res.json();
        // })
    };
    /**
     * Authenticate a user. Save a token string in localStorage.
     */
    AuthService.prototype.authenticateUser = function (token, email) {
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
    };
    /**
     * Check if a user is authenticated.
     */
    AuthService.prototype.isUserAuthenticated = function () {
        return localStorage.getItem('token') !== null;
    };
    /**
     * De-authenticate a user
     */
    AuthService.prototype.deauthenticate = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    };
    /**
     * Get token value
     */
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    /**
     * Get email
     */
    AuthService.prototype.getEmail = function () {
        return localStorage.getItem('email');
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__error_service__["a" /* ErrorService */]) === "function" && _b || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_error_model__ = __webpack_require__("../../../../../src/app/Models/error.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorService = /** @class */ (function () {
    function ErrorService() {
        this.errorOccurred = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ErrorService.prototype.handleError = function (error) {
        console.log(error);
        var errorData = new __WEBPACK_IMPORTED_MODULE_1__Models_error_model__["a" /* Error */](error.success, error.message);
        this.errorOccurred.emit(errorData);
    };
    ErrorService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ErrorService);
    return ErrorService;
}());

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_service__ = __webpack_require__("../../../../../src/app/services/error.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = /** @class */ (function () {
    function UsersService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
    }
    UsersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__error_service__["a" /* ErrorService */]) === "function" && _b || Object])
    ], UsersService);
    return UsersService;
    var _a, _b;
}());

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map