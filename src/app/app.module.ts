import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableComponent } from './TableComponent';

@NgModule({
    declarations: [
        TableComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [TableComponent]
})
export class AppModule { }
