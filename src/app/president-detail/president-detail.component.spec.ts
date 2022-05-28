import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentDetailComponent } from './president-detail.component';

describe('PresidentDetailComponent', () => {
  let component: PresidentDetailComponent;
  let fixture: ComponentFixture<PresidentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresidentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
