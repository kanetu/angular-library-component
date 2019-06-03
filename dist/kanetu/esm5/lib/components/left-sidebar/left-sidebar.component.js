/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'lib-left-sidebar',
                    template: "<div class=\"left-sidebar\">\r\n  <nav class=\"nav flex-column\" >\r\n      <a class=\"nav-link\" *ngFor=\"let item of menuSidebar\" [routerLink]=item.link>{{item.name}}</a>\r\n    </nav>\r\n</div>\r\n",
                    styles: [".left-sidebar{background:#e9ecef;border-radius:10px;padding:10px 0}.left-sidebar a.nav-link{color:#000}.left-sidebar a.nav-link:hover{background:rgba(0,0,0,.5);color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    LeftSidebarComponent.ctorParameters = function () { return []; };
    LeftSidebarComponent.propDecorators = {
        menuSidebar: [{ type: Input }]
    };
    return LeftSidebarComponent;
}());
export { LeftSidebarComponent };
if (false) {
    /** @type {?} */
    LeftSidebarComponent.prototype.menuSidebar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbmV0dS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xlZnQtc2lkZWJhci9sZWZ0LXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQVdFO1FBRUUsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztTQUNqQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQXRCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIscU5BQTRDOztpQkFFN0M7Ozs7OzhCQUlFLEtBQUs7O0lBZ0JSLDJCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FuQlksb0JBQW9COzs7SUFHL0IsMkNBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1sZWZ0LXNpZGViYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sZWZ0LXNpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMZWZ0U2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBASW5wdXQoKSBtZW51U2lkZWJhcjogeyBuYW1lOiBzdHJpbmcsIGxpbms6IHN0cmluZyB9W107XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB0aGlzLm1lbnVTaWRlYmFyID0gW1xyXG4gICAgICB7bmFtZTogJ01lbnUgMScsIGxpbms6ICcvbWVudTEnfSxcclxuICAgICAge25hbWU6ICdNZW51IDInLCBsaW5rOiAnL21lbnUyJ30sXHJcbiAgICAgIHtuYW1lOiAnTWVudSAzJywgbGluazogJy9tZW51Myd9LFxyXG4gICAgICB7bmFtZTogJ01lbnUgNCcsIGxpbms6ICcvbWVudTQnfSxcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==