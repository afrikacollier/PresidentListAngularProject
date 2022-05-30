import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentInfopageComponent } from './president-infopage.component';

describe('PresidentInfopageComponent', () => {
  let component: PresidentInfopageComponent;
  let fixture: ComponentFixture<PresidentInfopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresidentInfopageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentInfopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
