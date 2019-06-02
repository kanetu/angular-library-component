(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('kanetu', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global.kanetu = {}, global.ng.core, global.ng.common));
}(this, function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var KanetuService = /** @class */ (function () {
        function KanetuService() {
        }
        KanetuService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        KanetuService.ctorParameters = function () { return []; };
        /** @nocollapse */ KanetuService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function KanetuService_Factory() { return new KanetuService(); }, token: KanetuService, providedIn: "root" });
        return KanetuService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var KanetuComponent = /** @class */ (function () {
        function KanetuComponent() {
        }
        /**
         * @return {?}
         */
        KanetuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        KanetuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-kanetu',
                        template: "\n    <p>\n      kanetu works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        KanetuComponent.ctorParameters = function () { return []; };
        return KanetuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooterComponent = /** @class */ (function () {
        function FooterComponent() {
        }
        /**
         * @return {?}
         */
        FooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        FooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-footer',
                        template: "<footer>\n  \u00A9 2019 Copyright by <strong>Kane</strong>\n</footer>\n",
                        styles: ["footer{text-align:center;background:#f8f9fa;padding:15px;margin-top:20px}"]
                    }] }
        ];
        /** @nocollapse */
        FooterComponent.ctorParameters = function () { return []; };
        return FooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
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
        HeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        HeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-header',
                        template: "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n      <img src={{logoUrl}} width=\"30\" height=\"30\" alt=\"\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\"  *ngFor=\"let menu of menuNavbar\">\n        <a class=\"nav-link\" href={{menu.link}}>{{menu.name}}</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav navbar-right\">\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <img class=\"avatar-user\" src={{avatarUrl}} alt=\"\">\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n              <a class=\"dropdown-item\" href=\"#\">My Profile</a>\n              <a class=\"dropdown-item\" href=\"#\">Change password</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </li>\n    </ul>\n\n  </div>\n</nav>\n<div class=\"jumbotron custom-jumbotron\">\n    <h1 class=\"display-4\">Simple Angular Application</h1>\n    <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n</div>\n\n",
                        styles: [".avatar-user{width:30px;height:30px;border-radius:50%}"]
                    }] }
        ];
        /** @nocollapse */
        HeaderComponent.ctorParameters = function () { return []; };
        HeaderComponent.propDecorators = {
            logoUrl: [{ type: core.Input }],
            avatarUrl: [{ type: core.Input }],
            menuNavbar: [{ type: core.Input }]
        };
        return HeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LeftSidebarComponent = /** @class */ (function () {
        function LeftSidebarComponent() {
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
        LeftSidebarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        LeftSidebarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-left-sidebar',
                        template: "<div class=\"left-sidebar\">\n  <nav class=\"nav flex-column\" >\n      <a class=\"nav-link\" *ngFor=\"let item of menuSidebar\" href={{item.link}}>{{item.name}}</a>\n    </nav>\n</div>\n",
                        styles: [".left-sidebar{background:#e9ecef;border-radius:10px;padding:10px 0}.left-sidebar a.nav-link{color:#000}.left-sidebar a.nav-link:hover{background:rgba(0,0,0,.5);color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        LeftSidebarComponent.ctorParameters = function () { return []; };
        LeftSidebarComponent.propDecorators = {
            menuSidebar: [{ type: core.Input }]
        };
        return LeftSidebarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginComponent = /** @class */ (function () {
        function LoginComponent() {
        }
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} username
         * @param {?} password
         * @return {?}
         */
        LoginComponent.prototype.onSubmit = /**
         * @param {?} username
         * @param {?} password
         * @return {?}
         */
        function (username, password) {
            alert("\n      Your email: " + username + "\n      Your password: " + password + "\n    ");
        };
        LoginComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-login',
                        template: "<div class=\"row\">\n  <div class=\"col-6 offset-3\">\n      <form (submit)=\"onSubmit(username.value,password.value)\">\n          <div class=\"form-group\">\n            <label>Email address</label>\n            <input\n              #username\n              type=\"email\"\n              class=\"form-control\"\n              placeholder=\"Enter email\"\n            />\n            <small id=\"emailHelp\" class=\"form-text text-muted\"\n              >We'll never share your email with anyone else.</small\n            >\n          </div>\n          <div class=\"form-group\">\n            <label>Password</label>\n            <input\n              #password\n              type=\"password\"\n              class=\"form-control\"\n              placeholder=\"Password\"\n            />\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n\n  </div>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        LoginComponent.ctorParameters = function () { return []; };
        return LoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var KanetuModule = /** @class */ (function () {
        function KanetuModule() {
        }
        KanetuModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            KanetuComponent,
                            FooterComponent,
                            HeaderComponent,
                            LeftSidebarComponent,
                            LoginComponent
                        ],
                        imports: [
                            common.CommonModule,
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
        return KanetuModule;
    }());

    exports.FooterComponent = FooterComponent;
    exports.HeaderComponent = HeaderComponent;
    exports.KanetuComponent = KanetuComponent;
    exports.KanetuModule = KanetuModule;
    exports.KanetuService = KanetuService;
    exports.LeftSidebarComponent = LeftSidebarComponent;
    exports.LoginComponent = LoginComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=kanetu.umd.js.map
