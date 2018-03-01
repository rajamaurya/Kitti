import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittieSellComponent } from './kittie-sell.component';

describe('KittieSellComponent', () => {
  let component: KittieSellComponent;
  let fixture: ComponentFixture<KittieSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittieSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittieSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
