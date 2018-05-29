import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { DATA } from './../data/data';

@Injectable()

export class TableService {

    constructor() { }

    getItems(): Observable<any[]> {
        return Observable.of(DATA).delay(100);
    }

    getColumns(): string[] {
        return ["id", "balance", "age", "name"]
    }
}
