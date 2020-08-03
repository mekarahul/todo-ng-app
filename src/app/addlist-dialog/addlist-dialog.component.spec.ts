import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlistDialogComponent } from './addlist-dialog.component';

describe('AddlistDialogComponent', () => {
  let component: AddlistDialogComponent;
  let fixture: ComponentFixture<AddlistDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlistDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
