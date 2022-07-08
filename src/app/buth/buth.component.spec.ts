import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BUTHComponent } from './buth.component';

describe('BUTHComponent', () => {
  let component: BUTHComponent;
  let fixture: ComponentFixture<BUTHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BUTHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BUTHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
