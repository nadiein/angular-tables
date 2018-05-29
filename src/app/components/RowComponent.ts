import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: '[app-table-row]',
    templateUrl: './RowComponent.html',
    styleUrls: ['./RowComponent.css']
})
export class RowComponent implements OnInit {

    @Input() item: any;
    @Input() columns: string[];

    constructor() { }

    ngOnInit() { }
}
