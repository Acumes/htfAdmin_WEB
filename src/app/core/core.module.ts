import { CommonModule } from '@angular/common';
import { NgModule,Optional,SkipSelf } from '@angular/core';
import { HttpClientService } from './services/http-client.service';

import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
    ],
    exports:[
    ],
    providers: [
        HttpClientService,
    ]
})
export default class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
