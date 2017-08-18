import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {CommonModule} from '@angular/common';
import { ContactsDataService } from "./contacts-data.service";


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    
  ],
  exports:[
   
  ],
  providers: [
    ContactsDataService
  ],
})
export default class ContactsModule {
}