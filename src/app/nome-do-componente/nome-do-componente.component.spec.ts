import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeDoComponenteComponent } from './nome-do-componente.component';

describe('NomeDoComponenteComponent', () => {
  let component: NomeDoComponenteComponent;
  let fixture: ComponentFixture<NomeDoComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NomeDoComponenteComponent]
    });
    fixture = TestBed.createComponent(NomeDoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
