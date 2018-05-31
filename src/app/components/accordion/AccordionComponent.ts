import { 
    Component, 
    ContentChildren, 
    QueryList 
} from '@angular/core';
import { TableComponent } from './../table/TableComponent';
 
@Component({
    selector: 'accordion',
    template: '<ng-content></ng-content>'
})

export class AccordionComponent {
    @ContentChildren(TableComponent) items: QueryList<TableComponent>;
}