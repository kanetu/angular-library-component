import { OnInit } from '@angular/core';
export declare class HeaderComponent implements OnInit {
    logoUrl: string;
    avatarUrl: string;
    menuNavbar: {
        name: string;
        link: string;
    }[];
    constructor();
    ngOnInit(): void;
}
