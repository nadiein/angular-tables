import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowComponent } from './RowComponent';

describe('RowComponent', () => {
    let component: RowComponent;
    let fixture: ComponentFixture<RowComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RowComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
