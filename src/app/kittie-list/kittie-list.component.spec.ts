import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittieListComponent } from './kittie-list.component';

describe('KittieListComponent', () => {
  let component: KittieListComponent;
  let fixture: ComponentFixture<KittieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
