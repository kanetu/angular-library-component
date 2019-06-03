import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KanetuService {
    constructor() { }
}
KanetuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
KanetuService.ctorParameters = () => [];
/** @nocollapse */ KanetuService.ngInjectableDef = ɵɵdefineInjectable({ factory: function KanetuService_Factory() { return new KanetuService(); }, token: KanetuService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KanetuComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
KanetuComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-kanetu',
                template: `
    <p>
      kanetu works!
    </p>
  `
            }] }
];
/** @nocollapse */
KanetuComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-footer',
                template: "<footer>\r\n  \u00A9 2019 Copyright by <strong>Kane</strong>\r\n</footer>\r\n",
                styles: ["footer{text-align:center;background:#f8f9fa;padding:15px;margin-top:20px}"]
            }] }
];
/** @nocollapse */
FooterComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderComponent {
    constructor() {
        this.logoUrl = 'http://pluspng.com/img-png/bootstrap-logo-png-logo-of-bootstrap-framework-195.png';
        this.avatarUrl = 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/45256672_1055358751311056_3609953152255655936_n.jpg?_nc_cat=109&_nc_oc=AQnD_RZXH8Htxh4zaCGKWPJfr7UhWem3o1c7FjSNt79PNUiuONmttuwdFAH_ngZ3iCE&_nc_ht=scontent.fsgn5-6.fna&oh=ff10c22fcd5794366cd1f8fc0a9146e4&oe=5D59E9E0';
        this.menuNavbar = [
            { name: 'Home', link: '/' },
            { name: 'About', link: '/about' },
            { name: 'Contact', link: '/contact' },
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-header',
                template: "\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n      <img src={{logoUrl}} width=\"30\" height=\"30\" alt=\"\">\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\"  *ngFor=\"let menu of menuNavbar\">\r\n        <a class=\"nav-link\" href={{menu.link}}>{{menu.name}}</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav navbar-right\">\r\n        <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <img class=\"avatar-user\" src={{avatarUrl}} alt=\"\">\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\r\n              <a class=\"dropdown-item\" href=\"#\">My Profile</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Change password</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </li>\r\n    </ul>\r\n\r\n  </div>\r\n</nav>\r\n<div class=\"jumbotron custom-jumbotron\">\r\n    <h1 class=\"display-4\">Simple Angular Application</h1>\r\n    <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\r\n</div>\r\n\r\n",
                styles: [".avatar-user{width:30px;height:30px;border-radius:50%}"]
            }] }
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    logoUrl: [{ type: Input }],
    avatarUrl: [{ type: Input }],
    menuNavbar: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LeftSidebarComponent {
    constructor() {
        this.menuSidebar = [
            { name: 'Menu 1', link: '/menu1' },
            { name: 'Menu 2', link: '/menu2' },
            { name: 'Menu 3', link: '/menu3' },
            { name: 'Menu 4', link: '/menu4' },
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LeftSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-left-sidebar',
                template: "<div class=\"left-sidebar\">\r\n  <nav class=\"nav flex-column\" >\r\n      <a class=\"nav-link\" *ngFor=\"let item of menuSidebar\" href={{item.link}}>{{item.name}}</a>\r\n    </nav>\r\n</div>\r\n",
                styles: [".left-sidebar{background:#e9ecef;border-radius:10px;padding:10px 0}.left-sidebar a.nav-link{color:#000}.left-sidebar a.nav-link:hover{background:rgba(0,0,0,.5);color:#fff}"]
            }] }
];
/** @nocollapse */
LeftSidebarComponent.ctorParameters = () => [];
LeftSidebarComponent.propDecorators = {
    menuSidebar: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    onSubmit(username, password) {
        alert(`
      Your email: ${username}
      Your password: ${password}
    `);
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-login',
                template: "<div class=\"row\">\r\n  <div class=\"col-6 offset-3\">\r\n      <form (submit)=\"onSubmit(username.value,password.value)\">\r\n          <div class=\"form-group\">\r\n            <label>Email address</label>\r\n            <input\r\n              #username\r\n              type=\"email\"\r\n              class=\"form-control\"\r\n              placeholder=\"Enter email\"\r\n            />\r\n            <small id=\"emailHelp\" class=\"form-text text-muted\"\r\n              >We'll never share your email with anyone else.</small\r\n            >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input\r\n              #password\r\n              type=\"password\"\r\n              class=\"form-control\"\r\n              placeholder=\"Password\"\r\n            />\r\n          </div>\r\n\r\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n\r\n  </div>\r\n</div>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KanetuModule {
}
KanetuModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    KanetuComponent,
                    FooterComponent,
                    HeaderComponent,
                    LeftSidebarComponent,
                    LoginComponent
                ],
                imports: [
                    CommonModule,
                ],
                exports: [
                    KanetuComponent,
                    FooterComponent,
                    HeaderComponent,
                    LeftSidebarComponent,
                    LoginComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FooterComponent, HeaderComponent, KanetuComponent, KanetuModule, KanetuService, LeftSidebarComponent, LoginComponent };
//# sourceMappingURL=kanetu.js.map
