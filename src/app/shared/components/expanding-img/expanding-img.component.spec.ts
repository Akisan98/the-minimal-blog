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
    component.imagePath = 'https://images.ctfassets.net/my1gpwcc5xry/4mcmiBcFIo2CZRYEH6H1Km/de71754d21b8be4cf0ececf910b5c48e/skateboardBanner.jpg?fm=webp';
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // it('should', fakeAsync(() => {
  //   component.imagePath = 'https://images.ctfassets.net/my1gpwcc5xry/4mcmiBcFIo2CZRYEH6H1Km/de71754d21b8be4cf0ececf910b5c48e/skateboardBanner.jpg?fm=webp';
  //   component.height = '615';
  //   component.width = '1326';
  //   fixture.detectChanges();


  //   let image = fixture.debugElement.nativeElement.querySelector('img');

  //   const initHeight = image.height;

  //   image.click();
  //   tick();

  //   // image.triggerEventHandler('click', null);
  //   fixture.detectChanges();
  //   expect(Number.parseInt(image.height)).toBeGreaterThan(Number.parseInt(initHeight));
  // }));
});
