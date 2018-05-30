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
    @ContentChildren(TableComponent) panels: QueryList<TableComponent>;
 
    ngAfterContentInit() {
        this.panels.toArray().forEach((panel) => {
            panel.toggle.subscribe(() => {
                this.openPanel(panel);
            });
        });
    }
 
    openPanel(panel: TableComponent) {
        this.panels.toArray().forEach(el => el.opened = false);
        panel.opened = true;
    }
}