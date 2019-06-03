/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'lib-header',
                    template: "\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n      <img src={{logoUrl}} width=\"30\" height=\"30\" alt=\"\">\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\"  *ngFor=\"let menu of menuNavbar\">\r\n        <a class=\"nav-link\" [routerLink]=menu.link>{{menu.name}}</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav navbar-right\">\r\n        <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <img class=\"avatar-user\" src={{avatarUrl}} alt=\"\">\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\r\n              <a class=\"dropdown-item\" href=\"#\">My Profile</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Change password</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </li>\r\n    </ul>\r\n\r\n  </div>\r\n</nav>\r\n<div class=\"jumbotron custom-jumbotron\">\r\n    <h1 class=\"display-4\">Simple Angular Application</h1>\r\n    <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\r\n</div>\r\n\r\n",
                    styles: [".avatar-user{width:30px;height:30px;border-radius:50%}"]
                }] }
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return []; };
    HeaderComponent.propDecorators = {
        logoUrl: [{ type: Input }],
        avatarUrl: [{ type: Input }],
        menuNavbar: [{ type: Input }]
    };
    return HeaderComponent;
}());
export { HeaderComponent };
if (false) {
    /** @type {?} */
    HeaderComponent.prototype.logoUrl;
    /** @type {?} */
    HeaderComponent.prototype.avatarUrl;
    /** @type {?} */
    HeaderComponent.prototype.menuNavbar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbmV0dS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQWFFO1FBRUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxtRkFBbUYsQ0FBQztRQUNuRyxJQUFJLENBQUMsU0FBUyxHQUFJLHdRQUF3USxDQUFDO1FBRTNSLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUM7WUFDekIsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDL0IsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7U0FFcEMsQ0FBQztJQUVILENBQUM7Ozs7SUFFRixrQ0FBUTs7O0lBQVI7SUFFQSxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixnMURBQXNDOztpQkFFdkM7Ozs7OzBCQUlFLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQXFCUixzQkFBQztDQUFBLEFBL0JELElBK0JDO1NBMUJZLGVBQWU7OztJQUcxQixrQ0FBeUI7O0lBQ3pCLG9DQUEyQjs7SUFDM0IscUNBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgQElucHV0KCkgbG9nb1VybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGF2YXRhclVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1lbnVOYXZiYXI6IHsgbmFtZTogc3RyaW5nLCBsaW5rOiBzdHJpbmcgfVtdO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgdGhpcy5sb2dvVXJsID0gJ2h0dHA6Ly9wbHVzcG5nLmNvbS9pbWctcG5nL2Jvb3RzdHJhcC1sb2dvLXBuZy1sb2dvLW9mLWJvb3RzdHJhcC1mcmFtZXdvcmstMTk1LnBuZyc7XHJcbiAgICB0aGlzLmF2YXRhclVybCAgPSAnaHR0cHM6Ly9zY29udGVudC5mc2duNS02LmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvNDUyNTY2NzJfMTA1NTM1ODc1MTMxMTA1Nl8zNjA5OTUzMTUyMjU1NjU1OTM2X24uanBnP19uY19jYXQ9MTA5Jl9uY19vYz1BUW5EX1JaWEg4SHR4aDR6YUNHS1dQSmZyN1VoV2VtM28xYzdGalNOdDc5UE5VaXVPTm10dHV3ZEZBSF9uZ1ozaUNFJl9uY19odD1zY29udGVudC5mc2duNS02LmZuYSZvaD1mZjEwYzIyZmNkNTc5NDM2NmNkMWY4ZmMwYTkxNDZlNCZvZT01RDU5RTlFMCc7XHJcblxyXG4gICAgdGhpcy5tZW51TmF2YmFyID0gW1xyXG4gICAgICB7bmFtZTogJ0hvbWUnLCBsaW5rOiAnLyd9LFxyXG4gICAgICB7bmFtZTogJ0Fib3V0JywgbGluazogJy9hYm91dCd9LFxyXG4gICAgICB7bmFtZTogJ0NvbnRhY3QnLCBsaW5rOiAnL2NvbnRhY3QnfSxcclxuXHJcbiAgICBdO1xyXG5cclxuICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=