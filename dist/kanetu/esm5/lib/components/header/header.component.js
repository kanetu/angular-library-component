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
                    template: "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n      <img src={{logoUrl}} width=\"30\" height=\"30\" alt=\"\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\"  *ngFor=\"let menu of menuNavbar\">\n        <a class=\"nav-link\" href={{menu.link}}>{{menu.name}}</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav navbar-right\">\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <img class=\"avatar-user\" src={{avatarUrl}} alt=\"\">\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n              <a class=\"dropdown-item\" href=\"#\">My Profile</a>\n              <a class=\"dropdown-item\" href=\"#\">Change password</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </li>\n    </ul>\n\n  </div>\n</nav>\n<div class=\"jumbotron custom-jumbotron\">\n    <h1 class=\"display-4\">Simple Angular Application</h1>\n    <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n</div>\n\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbmV0dS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQWFFO1FBRUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxtRkFBbUYsQ0FBQztRQUNuRyxJQUFJLENBQUMsU0FBUyxHQUFJLHdRQUF3USxDQUFDO1FBRTNSLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUM7WUFDekIsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDL0IsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7U0FFcEMsQ0FBQztJQUVILENBQUM7Ozs7SUFFRixrQ0FBUTs7O0lBQVI7SUFFQSxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0Qixvd0RBQXNDOztpQkFFdkM7Ozs7OzBCQUlFLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQXFCUixzQkFBQztDQUFBLEFBL0JELElBK0JDO1NBMUJZLGVBQWU7OztJQUcxQixrQ0FBeUI7O0lBQ3pCLG9DQUEyQjs7SUFDM0IscUNBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIEBJbnB1dCgpIGxvZ29Vcmw6IHN0cmluZztcbiAgQElucHV0KCkgYXZhdGFyVXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1lbnVOYXZiYXI6IHsgbmFtZTogc3RyaW5nLCBsaW5rOiBzdHJpbmcgfVtdO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmxvZ29VcmwgPSAnaHR0cDovL3BsdXNwbmcuY29tL2ltZy1wbmcvYm9vdHN0cmFwLWxvZ28tcG5nLWxvZ28tb2YtYm9vdHN0cmFwLWZyYW1ld29yay0xOTUucG5nJztcbiAgICB0aGlzLmF2YXRhclVybCAgPSAnaHR0cHM6Ly9zY29udGVudC5mc2duNS02LmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvNDUyNTY2NzJfMTA1NTM1ODc1MTMxMTA1Nl8zNjA5OTUzMTUyMjU1NjU1OTM2X24uanBnP19uY19jYXQ9MTA5Jl9uY19vYz1BUW5EX1JaWEg4SHR4aDR6YUNHS1dQSmZyN1VoV2VtM28xYzdGalNOdDc5UE5VaXVPTm10dHV3ZEZBSF9uZ1ozaUNFJl9uY19odD1zY29udGVudC5mc2duNS02LmZuYSZvaD1mZjEwYzIyZmNkNTc5NDM2NmNkMWY4ZmMwYTkxNDZlNCZvZT01RDU5RTlFMCc7XG5cbiAgICB0aGlzLm1lbnVOYXZiYXIgPSBbXG4gICAgICB7bmFtZTogJ0hvbWUnLCBsaW5rOiAnLyd9LFxuICAgICAge25hbWU6ICdBYm91dCcsIGxpbms6ICcvYWJvdXQnfSxcbiAgICAgIHtuYW1lOiAnQ29udGFjdCcsIGxpbms6ICcvY29udGFjdCd9LFxuXG4gICAgXTtcblxuICAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxufVxuIl19