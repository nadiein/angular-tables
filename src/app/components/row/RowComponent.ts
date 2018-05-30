import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: '[table-row-cont]',
    templateUrl: './RowComponent.html',
    styleUrls: ['./RowComponent.scss']
})
export class RowComponent implements OnInit {

    @Input() item: any;
    @Input() columns: string[];
    @Input() opened = false;
    @Input() title: string;
    @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() { }
}
