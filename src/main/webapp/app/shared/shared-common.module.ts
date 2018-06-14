import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    FicceqdmoMonitorSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        FicceqdmoMonitorSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        FicceqdmoMonitorSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class FicceqdmoMonitorSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
