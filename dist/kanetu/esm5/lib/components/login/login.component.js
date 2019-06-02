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
                    template: "<div class=\"row\">\n  <div class=\"col-6 offset-3\">\n      <form (submit)=\"onSubmit(username.value,password.value)\">\n          <div class=\"form-group\">\n            <label>Email address</label>\n            <input\n              #username\n              type=\"email\"\n              class=\"form-control\"\n              placeholder=\"Enter email\"\n            />\n            <small id=\"emailHelp\" class=\"form-text text-muted\"\n              >We'll never share your email with anyone else.</small\n            >\n          </div>\n          <div class=\"form-group\">\n            <label>Password</label>\n            <input\n              #password\n              type=\"password\"\n              class=\"form-control\"\n              placeholder=\"Password\"\n            />\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return []; };
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FuZXR1LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxEO0lBT0U7SUFBZ0IsQ0FBQzs7OztJQUVqQixpQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7Ozs7SUFFRCxpQ0FBUTs7Ozs7SUFBUixVQUFTLFFBQWdCLEVBQUUsUUFBZ0I7UUFDekMsS0FBSyxDQUFDLHlCQUNVLFFBQVEsK0JBQ0wsUUFBUSxXQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiwwNkJBQXFDOztpQkFFdEM7Ozs7SUFjRCxxQkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvblN1Ym1pdCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgYWxlcnQoYFxuICAgICAgWW91ciBlbWFpbDogJHt1c2VybmFtZX1cbiAgICAgIFlvdXIgcGFzc3dvcmQ6ICR7cGFzc3dvcmR9XG4gICAgYCk7XG4gIH1cbn1cbiJdfQ==