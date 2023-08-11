import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontGetComponent } from './front-get.component';

describe('FrontGetComponent', () => {
  let component: FrontGetComponent;
  let fixture: ComponentFixture<FrontGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
