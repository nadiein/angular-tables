import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: '[table-row-cont]',
    templateUrl: './RowComponent.html',
    styleUrls: ['./RowComponent.css']
})
export class RowComponent implements OnInit {

    @Input() item: any;
    @Input() columns: string[];

    constructor() { }

    ngOnInit() { }
}
