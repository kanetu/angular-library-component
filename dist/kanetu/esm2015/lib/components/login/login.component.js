/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class LoginComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FuZXR1LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBT2xELE1BQU0sT0FBTyxjQUFjO0lBRXpCLGdCQUFnQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjtRQUN6QyxLQUFLLENBQUM7b0JBQ1UsUUFBUTt1QkFDTCxRQUFRO0tBQzFCLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHMrQkFBcUM7O2FBRXRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWxvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICBhbGVydChgXHJcbiAgICAgIFlvdXIgZW1haWw6ICR7dXNlcm5hbWV9XHJcbiAgICAgIFlvdXIgcGFzc3dvcmQ6ICR7cGFzc3dvcmR9XHJcbiAgICBgKTtcclxuICB9XHJcbn1cclxuIl19