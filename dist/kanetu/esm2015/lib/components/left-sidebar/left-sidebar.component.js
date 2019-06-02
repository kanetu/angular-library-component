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
                template: "<div class=\"left-sidebar\">\n  <nav class=\"nav flex-column\" >\n      <a class=\"nav-link\" *ngFor=\"let item of menuSidebar\" href={{item.link}}>{{item.name}}</a>\n    </nav>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbmV0dS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xlZnQtc2lkZWJhci9sZWZ0LXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sb0JBQW9CO0lBTS9CO1FBRUUsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztTQUNqQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHVNQUE0Qzs7YUFFN0M7Ozs7OzBCQUlFLEtBQUs7Ozs7SUFBTiwyQ0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxlZnQtc2lkZWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sZWZ0LXNpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sZWZ0LXNpZGViYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMZWZ0U2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBASW5wdXQoKSBtZW51U2lkZWJhcjogeyBuYW1lOiBzdHJpbmcsIGxpbms6IHN0cmluZyB9W107XG5cblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMubWVudVNpZGViYXIgPSBbXG4gICAgICB7bmFtZTogJ01lbnUgMScsIGxpbms6ICcvbWVudTEnfSxcbiAgICAgIHtuYW1lOiAnTWVudSAyJywgbGluazogJy9tZW51Mid9LFxuICAgICAge25hbWU6ICdNZW51IDMnLCBsaW5rOiAnL21lbnUzJ30sXG4gICAgICB7bmFtZTogJ01lbnUgNCcsIGxpbms6ICcvbWVudTQnfSxcbiAgICBdO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19