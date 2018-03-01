import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittieBuyComponent } from './kittie-buy.component';

describe('KittieBuyComponent', () => {
  let component: KittieBuyComponent;
  let fixture: ComponentFixture<KittieBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittieBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittieBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
