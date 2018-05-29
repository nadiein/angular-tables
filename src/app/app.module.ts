import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './components/TableComponent';
import { RowComponent } from './components/RowComponent';

import { TableService } from './services/table.service';
    
@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        RowComponent
    ],
    imports: [BrowserModule],
    providers: [TableService],
    bootstrap: [AppComponent]
})

export class AppModule { }
