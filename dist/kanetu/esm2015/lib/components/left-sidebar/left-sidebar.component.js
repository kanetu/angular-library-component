/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class LeftSidebarComponent {
    constructor() {
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
    ngOnInit() {
    }
}
LeftSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-left-sidebar',
                template: "<div class=\"left-sidebar\">\r\n  <nav class=\"nav flex-column\" >\r\n      <a class=\"nav-link\" *ngFor=\"let item of menuSidebar\" [routerLink]=item.link>{{item.name}}</a>\r\n    </nav>\r\n</div>\r\n",
                styles: [".left-sidebar{background:#e9ecef;border-radius:10px;padding:10px 0}.left-sidebar a.nav-link{color:#000}.left-sidebar a.nav-link:hover{background:rgba(0,0,0,.5);color:#fff}"]
            }] }
];
/** @nocollapse */
LeftSidebarComponent.ctorParameters = () => [];
LeftSidebarComponent.propDecorators = {
    menuSidebar: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LeftSidebarComponent.prototype.menuSidebar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbmV0dS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xlZnQtc2lkZWJhci9sZWZ0LXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sb0JBQW9CO0lBTS9CO1FBRUUsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztTQUNqQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHFOQUE0Qzs7YUFFN0M7Ozs7OzBCQUlFLEtBQUs7Ozs7SUFBTiwyQ0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWxlZnQtc2lkZWJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xlZnQtc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExlZnRTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gIEBJbnB1dCgpIG1lbnVTaWRlYmFyOiB7IG5hbWU6IHN0cmluZywgbGluazogc3RyaW5nIH1bXTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIHRoaXMubWVudVNpZGViYXIgPSBbXHJcbiAgICAgIHtuYW1lOiAnTWVudSAxJywgbGluazogJy9tZW51MSd9LFxyXG4gICAgICB7bmFtZTogJ01lbnUgMicsIGxpbms6ICcvbWVudTInfSxcclxuICAgICAge25hbWU6ICdNZW51IDMnLCBsaW5rOiAnL21lbnUzJ30sXHJcbiAgICAgIHtuYW1lOiAnTWVudSA0JywgbGluazogJy9tZW51NCd9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19