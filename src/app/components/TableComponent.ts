import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TableService } from '../services/table.service';

@Component({
    selector: 'app-table',
    templateUrl: './TableComponent.html',
    styleUrls: ['./TableComponent.css']
})

export class TableComponent implements OnInit {

    items: Observable<any[]>;
    columns: string[];

    constructor(private atService: TableService) { }

    ngOnInit() {
        this.columns = this.atService.getColumns();
        this.items = this.atService.getItems();
    }
}
