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
                    template: "<div class=\"left-sidebar\">\n  <nav class=\"nav flex-column\" >\n      <a class=\"nav-link\" *ngFor=\"let item of menuSidebar\" href={{item.link}}>{{item.name}}</a>\n    </nav>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbmV0dS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xlZnQtc2lkZWJhci9sZWZ0LXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQVdFO1FBRUUsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztTQUNqQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQXRCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsdU1BQTRDOztpQkFFN0M7Ozs7OzhCQUlFLEtBQUs7O0lBZ0JSLDJCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FuQlksb0JBQW9COzs7SUFHL0IsMkNBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1sZWZ0LXNpZGViYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGVmdFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgQElucHV0KCkgbWVudVNpZGViYXI6IHsgbmFtZTogc3RyaW5nLCBsaW5rOiBzdHJpbmcgfVtdO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLm1lbnVTaWRlYmFyID0gW1xuICAgICAge25hbWU6ICdNZW51IDEnLCBsaW5rOiAnL21lbnUxJ30sXG4gICAgICB7bmFtZTogJ01lbnUgMicsIGxpbms6ICcvbWVudTInfSxcbiAgICAgIHtuYW1lOiAnTWVudSAzJywgbGluazogJy9tZW51Myd9LFxuICAgICAge25hbWU6ICdNZW51IDQnLCBsaW5rOiAnL21lbnU0J30sXG4gICAgXTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==