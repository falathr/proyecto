import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPostComponent } from './front-post.component';

describe('FrontPostComponent', () => {
  let component: FrontPostComponent;
  let fixture: ComponentFixture<FrontPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
