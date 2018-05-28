import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import data from './data/data.js';
import { DetailsComponent } from './DetailsComponent';

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

@Component({
    selector: 'app-root',
    templateUrl: './TableComponent.html',
    styleUrls: ['./TableComponent.css']
})
export class TableComponent {
    title = 'app';
    items: Item[] = data
}
