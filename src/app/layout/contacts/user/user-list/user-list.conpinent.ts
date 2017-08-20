import { Component, OnInit ,Input ,SimpleChange, Injector,ReflectiveInjector } from '@angular/core';
import { routerTransition } from '../../../../router.animations';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls : ['./user-list.component.scss'],
    animations: [routerTransition()]
})

export class UserListComponent implements OnInit{

    constructor() {}

    ngOnInit() {}
}
