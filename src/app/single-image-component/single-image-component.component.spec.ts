import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleImageComponentComponent } from './single-image-component.component';

describe('SingleImageComponentComponent', () => {
  let component: SingleImageComponentComponent;
  let fixture: ComponentFixture<SingleImageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleImageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleImageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
