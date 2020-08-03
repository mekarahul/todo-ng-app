import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlistDialogComponent } from './editlist-dialog.component';

describe('EditlistDialogComponent', () => {
  let component: EditlistDialogComponent;
  let fixture: ComponentFixture<EditlistDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlistDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
