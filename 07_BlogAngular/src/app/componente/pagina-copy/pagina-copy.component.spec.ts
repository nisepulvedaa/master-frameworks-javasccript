import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCopyComponent } from './pagina-copy.component';

describe('PaginaCopyComponent', () => {
  let component: PaginaCopyComponent;
  let fixture: ComponentFixture<PaginaCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
