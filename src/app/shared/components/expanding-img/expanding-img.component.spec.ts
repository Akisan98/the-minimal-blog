import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandingImgComponent } from './expanding-img.component';

describe('ExpandingImgComponent', () => {
  let component: ExpandingImgComponent;
  let fixture: ComponentFixture<ExpandingImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandingImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandingImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
