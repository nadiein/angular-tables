import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TableService } from '../../services/table.service';

@Component({
    selector: 'table-cont',
    templateUrl: './TableComponent.html',
    styleUrls: ['./TableComponent.scss']
})

export class TableComponent implements OnInit {

    items: Observable<any[]>;
    columns: string[];
    opened: boolean = false;
    toggle: Observable<any[]>;

    constructor(private atService: TableService) { }

    ngOnInit() {
        this.columns = this.atService.getColumns();
        this.items = this.atService.getItems();
    }
}
