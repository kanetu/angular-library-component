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
                template: "<div class=\"row\">\n  <div class=\"col-6 offset-3\">\n      <form (submit)=\"onSubmit(username.value,password.value)\">\n          <div class=\"form-group\">\n            <label>Email address</label>\n            <input\n              #username\n              type=\"email\"\n              class=\"form-control\"\n              placeholder=\"Enter email\"\n            />\n            <small id=\"emailHelp\" class=\"form-text text-muted\"\n              >We'll never share your email with anyone else.</small\n            >\n          </div>\n          <div class=\"form-group\">\n            <label>Password</label>\n            <input\n              #password\n              type=\"password\"\n              class=\"form-control\"\n              placeholder=\"Password\"\n            />\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n\n  </div>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FuZXR1LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBT2xELE1BQU0sT0FBTyxjQUFjO0lBRXpCLGdCQUFnQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjtRQUN6QyxLQUFLLENBQUM7b0JBQ1UsUUFBUTt1QkFDTCxRQUFRO0tBQzFCLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDA2QkFBcUM7O2FBRXRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uU3VibWl0KHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICBhbGVydChgXG4gICAgICBZb3VyIGVtYWlsOiAke3VzZXJuYW1lfVxuICAgICAgWW91ciBwYXNzd29yZDogJHtwYXNzd29yZH1cbiAgICBgKTtcbiAgfVxufVxuIl19