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
                template: "<footer>\n  \u00A9 2019 Copyright by <strong>Kane</strong>\n</footer>\n",
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
                template: "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n      <img src={{logoUrl}} width=\"30\" height=\"30\" alt=\"\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\"  *ngFor=\"let menu of menuNavbar\">\n        <a class=\"nav-link\" href={{menu.link}}>{{menu.name}}</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav navbar-right\">\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <img class=\"avatar-user\" src={{avatarUrl}} alt=\"\">\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n              <a class=\"dropdown-item\" href=\"#\">My Profile</a>\n              <a class=\"dropdown-item\" href=\"#\">Change password</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </li>\n    </ul>\n\n  </div>\n</nav>\n<div class=\"jumbotron custom-jumbotron\">\n    <h1 class=\"display-4\">Simple Angular Application</h1>\n    <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n</div>\n\n",
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
                template: "<div class=\"left-sidebar\">\n  <nav class=\"nav flex-column\" >\n      <a class=\"nav-link\" *ngFor=\"let item of menuSidebar\" href={{item.link}}>{{item.name}}</a>\n    </nav>\n</div>\n",
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
                template: "<div class=\"row\">\n  <div class=\"col-6 offset-3\">\n      <form (submit)=\"onSubmit(username.value,password.value)\">\n          <div class=\"form-group\">\n            <label>Email address</label>\n            <input\n              #username\n              type=\"email\"\n              class=\"form-control\"\n              placeholder=\"Enter email\"\n            />\n            <small id=\"emailHelp\" class=\"form-text text-muted\"\n              >We'll never share your email with anyone else.</small\n            >\n          </div>\n          <div class=\"form-group\">\n            <label>Password</label>\n            <input\n              #password\n              type=\"password\"\n              class=\"form-control\"\n              placeholder=\"Password\"\n            />\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n\n  </div>\n</div>\n",
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
