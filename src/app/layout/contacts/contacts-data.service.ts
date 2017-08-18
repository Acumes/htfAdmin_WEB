import { Injectable }       from '@angular/core';
import { Http }       from '@angular/http';
import {  CONTACTS_URL } from './contacts-setting';
import { HttpClientService } from '../../core/services/http-client.service';

@Injectable()
export class ContactsDataService {
    
    
    constructor(private httpClientService: HttpClientService) {}
    //上传用户头像
    uploadAvatar(data){
        return this.httpClientService.postFileUpLoad(CONTACTS_URL,data)
    }

}