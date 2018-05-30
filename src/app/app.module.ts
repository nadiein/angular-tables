import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/TableComponent';
import { RowComponent } from './components/row/RowComponent';
import { AccordionComponent } from './components/accordion/AccordionComponent';
import { DetailsComponent } from './components/details/DetailsComponent';

import { TableService } from './services/table.service';
    
@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        RowComponent,
        AccordionComponent,
        DetailsComponent
    ],
    imports: [BrowserModule],
    providers: [TableService],
    bootstrap: [AppComponent]
})

export class AppModule { }
