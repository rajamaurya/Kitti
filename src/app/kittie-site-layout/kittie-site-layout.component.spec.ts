import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittieSiteLayoutComponent } from './kittie-site-layout.component';

describe('KittieSiteLayoutComponent', () => {
  let component: KittieSiteLayoutComponent;
  let fixture: ComponentFixture<KittieSiteLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittieSiteLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittieSiteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
