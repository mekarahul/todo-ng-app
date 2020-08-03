import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListactionsComponent } from './listactions.component';

describe('ListactionsComponent', () => {
  let component: ListactionsComponent;
  let fixture: ComponentFixture<ListactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
