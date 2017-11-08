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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_shared_checkbox_checkbox_component__ = __webpack_require__("../../../../../src/app/components/shared/checkbox/checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_shared_clickOutside_directive__ = __webpack_require__("../../../../../src/app/components/shared/clickOutside.directive.ts");
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



// import directive

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
                __WEBPACK_IMPORTED_MODULE_15__components_shared_checkbox_checkbox_component__["a" /* CheckboxComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_shared_clickOutside_directive__["a" /* ClickOutsideDirective */]
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

<<<<<<< HEAD
module.exports = "<div class=\"container\">\n  <input type=\"text\" class=\"form-control mb-3\" placeholder=\"Search for user to chat\">\n\n  <div class=\"card bg-light\">\n      <h3>Diagnosed Condition</h3>\n      {{ rows | json }}\n      {{ rows.length }}\n      <div class=\"mb-3 mt-3\" style=\"z-index: 1;\">\n          <ngx-datatable\n          #mydatatable\n          (select)=\"onSelect($event)\"\n          [selectionType]=\"'single'\"\n          [selected]=\"selected\"\n          [headerHeight]=\"30\"\n          [columnMode]=\"'force'\"\n          [footerHeight]=\"30\"\n          [rowHeight]=\"40\"\n          [rowClass]=\"getRowClass\"\n          [rows]=\"rows\"\n          [messages]=\"{'emptyMessage': 'Please add conditions'}\"\n          >\n          <ngx-datatable-column name=\"Condition Type\">\n            <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n                <select\n                    *ngIf=\"!row.dummy\"\n                    [(ngModel)]=\"row.conditionType\"\n                    name=\"conditionType\"\n                    class=\"form-control\">\n                <option value=\"\">Select Condition Type</option>\n                <option [ngValue]=\"row.conditionType\">{{ row.conditionType }}</option>\n              </select>\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Condition\">\n            <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n              <input \n                  *ngIf=\"!row.dummy\"\n                  type=\"text\" \n                  class=\"form-control\"\n                  name=\"condition\"\n                  [(ngModel)]=\"row.condition\">\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Date of Diagnosis\">\n            <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n                <div class=\"form-inline\" *ngIf=\"!row.dummy\">\n                    <div class=\"form-group\" #container>\n                      <div class=\"input-group\" (click)=\"d.toggle()\">\n                        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                               name=\"dp\" [(ngModel)]=\"row.dateOfDiagnosis\" ngbDatepicker #d=\"ngbDatepicker\">\n                        <button class=\"input-group-addon\" type=\"button\">\n                          <i class=\"fa fa-calendar\" aria-hidden=\"true\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"></i>\n                        </button>\n                      </div>\n                    </div>\n                </div>\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n      </div>\n      <div class=\"row form-group mx-0\">\n          <div class=\"col-md-3 mt-2\">\n            <checkbox [size]=\"'sm'\" [label]=\"'No Medical Condition'\" [position]=\"'right'\" [(check)]=\"noMedicalConditionFlag\" (checkChange)=\"noMedicalCondition(noMedicalConditionFlag)\"></checkbox>\n          </div>\n          <div class=\"col-md-4 offset-md-5\">\n            <button class=\"btn btn-primary\" (click)=\"addRow()\">\n              Add Condition\n            </button>\n            <button class=\"btn btn-secondary\" (click)=\"removeRow()\">\n              Remove Condition\n            </button>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"col-12 mt-3\">\n      <div class=\"card bg-secondary\">\n        <h5>Test</h5>\n      </div>\n    </div>\n</div>"
=======
module.exports = "<div class=\"container\">\n  <input type=\"text\" class=\"form-control mb-3\" placeholder=\"Search for user to chat\">\n\n  <div class=\"card bg-light\">\n      <h3>Diagnosed Condition</h3>\n      {{ rows | json }}\n      {{ rows.length }}\n      <div class=\"mb-3 mt-3\" style=\"z-index: 1;\">\n          <ngx-datatable\n          #mydatatable\n          (select)=\"onSelect($event)\"\n          [selectionType]=\"'single'\"\n          [selected]=\"selected\"\n          [headerHeight]=\"30\"\n          [columnMode]=\"'force'\"\n          [footerHeight]=\"30\"\n          [rowHeight]=\"40\"\n          [rowClass]=\"getRowClass\"\n          [rows]=\"rows\"\n          [messages]=\"{'emptyMessage': 'Please add conditions'}\"\n          >\n          <ngx-datatable-column name=\"Condition Type\">\n            <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n                <select\n                    *ngIf=\"!row.dummy\"\n                    [(ngModel)]=\"row.conditionType\"\n                    name=\"conditionType\"\n                    class=\"form-control\">\n                <option value=\"\">Select Condition Type</option>\n                <option [ngValue]=\"row.conditionType\">{{ row.conditionType }}</option>\n              </select>\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Condition\">\n            <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n              <input \n                  *ngIf=\"!row.dummy\"\n                  type=\"text\" \n                  class=\"form-control\"\n                  name=\"condition\"\n                  [(ngModel)]=\"row.condition\">\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Date of Diagnosis\">\n            <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n                <div class=\"form-inline\" *ngIf=\"!row.dummy\">\n                    <div class=\"form-group\" #container>\n                      <div class=\"input-group\" (click)=\"d.toggle(); openDatepicker(d)\">\n                        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                               name=\"dp\" [(ngModel)]=\"row.dateOfDiagnosis\" ngbDatepicker #d=\"ngbDatepicker\">\n                        <button class=\"input-group-addon\" type=\"button\">\n                          <i class=\"fa fa-calendar\" aria-hidden=\"true\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"></i>\n                        </button>\n                      </div>\n                    </div>\n                </div>\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n      </div>\n      <div class=\"row form-group mx-0\">\n          <div class=\"col-md-3 mt-2\">\n            <checkbox [size]=\"'sm'\" [label]=\"'No Medical Condition'\" [position]=\"'right'\" [(check)]=\"noMedicalConditionFlag\" (checkChange)=\"noMedicalCondition(noMedicalConditionFlag)\"></checkbox>\n          </div>\n          <div class=\"col-md-4 offset-md-5\">\n            <button class=\"btn btn-primary\" (click)=\"addRow()\">\n              Add Condition\n            </button>\n            <button class=\"btn btn-secondary\" (click)=\"removeRow()\">\n              Remove Condition\n            </button>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"col-12 mt-3\">\n      <div class=\"card bg-secondary\">\n        <h5>Test</h5>\n      </div>\n    </div>\n</div>"
>>>>>>> 92385b04d600d697fad72b80dd1c830434a56a2d

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function HomeComponent(el) {
        this.el = el;
        this.noMedicalConditionFlag = false;
        this.rows = [
            {
                "conditionType": "",
                "condition": "",
                "dateOfDiagnosis": "",
                "dummy": true,
                "active": false,
                "index": 0
            },
            {
                "conditionType": "",
                "condition": "",
                "dateOfDiagnosis": "",
                "dummy": true,
                "active": false,
                "index": 1
            },
            {
                "conditionType": "",
                "condition": "",
                "dateOfDiagnosis": "",
                "dummy": true,
                "active": false,
                "index": 2
            },
            {
                "conditionType": "",
                "condition": "",
                "dateOfDiagnosis": "",
                "dummy": true,
                "active": false,
                "index": 3
            },
            {
                "conditionType": "",
                "condition": "",
                "dateOfDiagnosis": "",
                "dummy": true,
                "active": false,
                "index": 4
            },
            {
                "conditionType": "",
                "condition": "",
                "dateOfDiagnosis": "",
                "dummy": true,
                "active": false,
                "index": 5
            }
        ];
        this.selected = [];
<<<<<<< HEAD
        this.tableFixedRowSize = 6;
=======
        this.pageLimit = 6;
>>>>>>> 92385b04d600d697fad72b80dd1c830434a56a2d
        this.dummyRows = this.rows;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getCellClass = function (_a) {
        var row = _a.row, column = _a.column, value = _a.value;
        return {
            'table-cell': true
        };
    };
    HomeComponent.prototype.getRowClass = function (row) {
        return {
            'activeRowClass': row.active
        };
    };
    HomeComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        // console.log('Select Event', selected, this.selected);
        console.log(selected);
        if (!selected[0].dummy) {
            if (this.prevSelected) {
                this.prevSelected[0].active = false;
            }
            selected[0].active = true;
            this.prevSelected = selected;
        }
    };
    HomeComponent.prototype.onActivate = function (event) {
        // console.log('Activate Event', event);
    };
    HomeComponent.prototype.addRow = function () {
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
        var i = 0;
        for (; i < this.rows.length; i++) {
            if (this.rows[i].dummy) {
                // update the index
                newRow.index = i;
                // add newRow to rows
                this.rows.splice(i, 1, newRow);
                this.onSelect(newSelectedObj);
                break;
            }
        }
        if (i === this.rows.length) {
            newRow.index = i;
            this.rows.push(newRow);
            this.onSelect(newSelectedObj);
        }
    };
    HomeComponent.prototype.removeRow = function () {
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
        }
        else {
            this.rows.splice(removeIndex, 1);
            this.rows.push(dummyRow);
        }
        // update subsequent index
        for (var i = removeIndex; i < this.rows.length; i++) {
            this.rows[i].index--;
        }
    };
    HomeComponent.prototype.compareFunction = function (a, b) {
        return a.dummy ? b : a;
    };
    HomeComponent.prototype.noMedicalCondition = function (noMedicalConditionFlag) {
        if (noMedicalConditionFlag) {
            this.rows = this.dummyRows;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "container", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input[ngbDatepicker]'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "datePicker", void 0);
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
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
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required)
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

module.exports = "<div (click)=\"changeCheckbox()\">\n    <label *ngIf=\"position === 'left'\">{{ label }}</label>\n    <span \n        class=\"fa mx-3\"\n        [ngClass]=\"{'fa-check-square-o ': checked, 'fa-square-o': !checked, 'fa-lg': size === 'sm', 'fa-2x': size === 'md', 'fa-3x': size === 'lg'}\"\n        aria-hidden=\"true\">\n    </span>\n    <label *ngIf=\"position === 'right'\" class=\"mr-3\">{{ label }}</label>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/checkbox/checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    }
    CheckboxComponent.prototype.ngOnInit = function () {
        console.log(this.label);
    };
    CheckboxComponent.prototype.changeCheckbox = function () {
        this.checked = !this.checked;
        this.checkChange.emit(this.checked);
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
    CheckboxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checkbox',
            template: __webpack_require__("../../../../../src/app/components/shared/checkbox/checkbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/checkbox/checkbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_equal_validator_directive__ = __webpack_require__("../../../../../src/app/shared/equal-validator.directive.ts");
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
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            confirm_password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        }, { validator: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_app_shared_equal_validator_directive__["a" /* validateEqualValidator */])('password', 'confirm_password') });
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
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

/***/ "../../../../../src/app/shared/equal-validator.directive.ts":
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