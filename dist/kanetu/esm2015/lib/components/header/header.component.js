/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class HeaderComponent {
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
if (false) {
    /** @type {?} */
    HeaderComponent.prototype.logoUrl;
    /** @type {?} */
    HeaderComponent.prototype.avatarUrl;
    /** @type {?} */
    HeaderComponent.prototype.menuNavbar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbmV0dS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sZUFBZTtJQVExQjtRQUVFLElBQUksQ0FBQyxPQUFPLEdBQUcsbUZBQW1GLENBQUM7UUFDbkcsSUFBSSxDQUFDLFNBQVMsR0FBSSx3UUFBd1EsQ0FBQztRQUUzUixJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDO1lBQ3pCLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQy9CLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1NBRXBDLENBQUM7SUFFSCxDQUFDOzs7O0lBRUYsUUFBUTtJQUVSLENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDQwREFBc0M7O2FBRXZDOzs7OztzQkFJRSxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7OztJQUZOLGtDQUF5Qjs7SUFDekIsb0NBQTJCOztJQUMzQixxQ0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBASW5wdXQoKSBsb2dvVXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYXZhdGFyVXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWVudU5hdmJhcjogeyBuYW1lOiBzdHJpbmcsIGxpbms6IHN0cmluZyB9W107XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB0aGlzLmxvZ29VcmwgPSAnaHR0cDovL3BsdXNwbmcuY29tL2ltZy1wbmcvYm9vdHN0cmFwLWxvZ28tcG5nLWxvZ28tb2YtYm9vdHN0cmFwLWZyYW1ld29yay0xOTUucG5nJztcclxuICAgIHRoaXMuYXZhdGFyVXJsICA9ICdodHRwczovL3Njb250ZW50LmZzZ241LTYuZm5hLmZiY2RuLm5ldC92L3QxLjAtOS80NTI1NjY3Ml8xMDU1MzU4NzUxMzExMDU2XzM2MDk5NTMxNTIyNTU2NTU5MzZfbi5qcGc/X25jX2NhdD0xMDkmX25jX29jPUFRbkRfUlpYSDhIdHhoNHphQ0dLV1BKZnI3VWhXZW0zbzFjN0ZqU050NzlQTlVpdU9ObXR0dXdkRkFIX25nWjNpQ0UmX25jX2h0PXNjb250ZW50LmZzZ241LTYuZm5hJm9oPWZmMTBjMjJmY2Q1Nzk0MzY2Y2QxZjhmYzBhOTE0NmU0Jm9lPTVENTlFOUUwJztcclxuXHJcbiAgICB0aGlzLm1lbnVOYXZiYXIgPSBbXHJcbiAgICAgIHtuYW1lOiAnSG9tZScsIGxpbms6ICcvJ30sXHJcbiAgICAgIHtuYW1lOiAnQWJvdXQnLCBsaW5rOiAnL2Fib3V0J30sXHJcbiAgICAgIHtuYW1lOiAnQ29udGFjdCcsIGxpbms6ICcvY29udGFjdCd9LFxyXG5cclxuICAgIF07XHJcblxyXG4gICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==