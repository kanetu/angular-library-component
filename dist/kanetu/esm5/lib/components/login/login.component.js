/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'lib-login',
                    template: "<div class=\"row\">\r\n  <div class=\"col-6 offset-3\">\r\n      <form (submit)=\"onSubmit(username.value,password.value)\">\r\n          <div class=\"form-group\">\r\n            <label>Email address</label>\r\n            <input\r\n              #username\r\n              type=\"email\"\r\n              class=\"form-control\"\r\n              placeholder=\"Enter email\"\r\n            />\r\n            <small id=\"emailHelp\" class=\"form-text text-muted\"\r\n              >We'll never share your email with anyone else.</small\r\n            >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input\r\n              #password\r\n              type=\"password\"\r\n              class=\"form-control\"\r\n              placeholder=\"Password\"\r\n            />\r\n          </div>\r\n\r\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n\r\n  </div>\r\n</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return []; };
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FuZXR1LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxEO0lBT0U7SUFBZ0IsQ0FBQzs7OztJQUVqQixpQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7Ozs7SUFFRCxpQ0FBUTs7Ozs7SUFBUixVQUFTLFFBQWdCLEVBQUUsUUFBZ0I7UUFDekMsS0FBSyxDQUFDLHlCQUNVLFFBQVEsK0JBQ0wsUUFBUSxXQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixzK0JBQXFDOztpQkFFdEM7Ozs7SUFjRCxxQkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1sb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgYWxlcnQoYFxyXG4gICAgICBZb3VyIGVtYWlsOiAke3VzZXJuYW1lfVxyXG4gICAgICBZb3VyIHBhc3N3b3JkOiAke3Bhc3N3b3JkfVxyXG4gICAgYCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==