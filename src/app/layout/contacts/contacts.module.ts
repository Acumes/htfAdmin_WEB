import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {CommonModule} from '@angular/common';
import { ContactsDataService } from "./contacts-data.service";
import { ContactsComponent } from './contacts.component';
//路由
import { contactsRoutes } from './contacts.routes';
//用户
import { UserComponent} from './user/user.component';
import { UserListComponent } from  './user/user-list/user-list.conpinent';
import { UserCreateComponent } from  './user/user-create/user-create.component';

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(contactsRoutes)
  ],
  declarations: [
      UserComponent,
      UserListComponent,
      UserCreateComponent,
      ContactsComponent
  ],
  exports:[

  ],
  providers: [
    ContactsDataService
  ],
})
export  class ContactsModule {
}
