import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittieDetailsComponent } from './kittie-details.component';

describe('KittieDetailsComponent', () => {
  let component: KittieDetailsComponent;
  let fixture: ComponentFixture<KittieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
