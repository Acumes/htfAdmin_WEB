import { Component, OnInit ,Input ,SimpleChange, Injector,ReflectiveInjector } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'contacts-component',
    templateUrl:'./contacts.component.html',
})

export class ContactsComponent implements OnInit{

    constructor() {
    }

    ngOnInit() {

    }
}
