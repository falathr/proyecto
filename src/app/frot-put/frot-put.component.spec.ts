import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrotPutComponent } from './frot-put.component';

describe('FrotPutComponent', () => {
  let component: FrotPutComponent;
  let fixture: ComponentFixture<FrotPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrotPutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrotPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
