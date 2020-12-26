import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiSegundoComponenteComponent } from './mi-segundo-componente.component';

describe('MiSegundoComponenteComponent', () => {
  let component: MiSegundoComponenteComponent;
  let fixture: ComponentFixture<MiSegundoComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiSegundoComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiSegundoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
