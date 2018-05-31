import { 
    Component, 
    ContentChildren, 
    QueryList, 
    AfterContentInit 
} from '@angular/core';
import { TableComponent } from './../table/TableComponent';
 
@Component({
    selector: 'accordion',
    template: '<ng-content></ng-content>'
})

export class AccordionComponent  implements AfterContentInit {
    @ContentChildren(TableComponent) items: QueryList<TableComponent>;
 
    ngAfterContentInit() {
        this.items.toArray().forEach((item) => {
            item.toggle.subscribe(() => {
                this.openPanel(item);
            });
        });
    }
 
    openPanel(item: TableComponent) {
        this.items.toArray().forEach(el => el.opened = false);
        item.opened = true;
    }
}