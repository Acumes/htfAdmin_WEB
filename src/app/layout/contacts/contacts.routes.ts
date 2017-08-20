import { RouterModule } from "@angular/router";
import { UserComponent} from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.conpinent'
import { UserCreateComponent } from './user/user-create/user-create.component';
import { ContactsComponent } from './contacts.component';

export const contactsRoutes = [
    {
        // path:'contacts/:entityId',
        path:'',
        component:	ContactsComponent,
        children: [
            { path: '', redirectTo:'user',pathMatch:'full'},

            {
                path: 'user',
                component:UserComponent ,
                data: { title: "成员" },
                children : [
                    { path: '', redirectTo:'list',pathMatch:'full'},
                    { path: 'list', component:UserListComponent},
                    { path: 'op/create', component:UserCreateComponent , data: { title: "添加用户" }  },
                    { path: 'op/:operation/:userId', component:UserCreateComponent , data: { title: "编辑用户" } },
                ]
            }
        ]
    }
];
