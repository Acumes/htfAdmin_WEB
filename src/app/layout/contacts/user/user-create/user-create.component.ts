import { Component, OnInit} from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { FormGroup} from '@angular/forms';
import { ContactsDataService } from '../../contacts-data.service';
import { DomSanitizer} from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { routerTransition } from '../../../../router.animations';

@Component({
    selector: 'user-create',
    templateUrl: './user-create.component.html',
    styleUrls : ['./user-create.component.scss'],
    animations: [routerTransition()]
})
export class UserCreateComponent implements OnInit {

    constructor(public contactsService:ContactsDataService) {
    }

    ngOnInit() {
        this.contactsService.getUserInfo().then(data => {
            console.log(data)
        }).catch(oErro => {
            console.log(oErro)
        })
    }
}
